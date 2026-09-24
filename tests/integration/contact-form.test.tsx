import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "../../app/components/ContactForm";

describe("ContactForm integration", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("submits the form data to /api/contact and shows a confirmation", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Taylor Recruiter" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "taylor@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Loved your portfolio, let's chat." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByText(/message is in/i)).toBeInTheDocument(),
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          name: "Taylor Recruiter",
          email: "taylor@example.com",
          message: "Loved your portfolio, let's chat.",
        }),
      }),
    );
  });

  it("surfaces the server's error message when the request fails", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Name, email, and message are all required." }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Taylor" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "taylor@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hi" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(
        screen.getByText("Name, email, and message are all required."),
      ).toBeInTheDocument(),
    );
  });
});

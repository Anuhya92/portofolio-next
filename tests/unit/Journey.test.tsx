import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Journey from "../../app/components/Journey";

describe("Journey", () => {
  it("renders every step in the timeline", () => {
    render(<Journey />);

    expect(screen.getByText("JNTU, Anantapur")).toBeInTheDocument();
    expect(
      screen.getAllByText("Sundsgårdens folkhögskola, Helsingborg"),
    ).toHaveLength(2);
  });

  it("orders steps most recent first, backend track before frontend", () => {
    render(<Journey />);

    const roles = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    const backendIndex = roles.indexOf("Backend Developer track");
    const frontendIndex = roles.indexOf("Frontend Developer track");

    expect(backendIndex).toBeLessThan(frontendIndex);
  });
});

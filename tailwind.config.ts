import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#141B2E",
        surface: "#1B2440",
        surfacehi: "#232F52",
        ink: "#E8ECF4",
        cyan: "#22D3EE",
        cyandim: "#0891B2",
        sage: "#7DD3C0",
        line: "#2B3454",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(34, 211, 238, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;

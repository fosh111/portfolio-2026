import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        serif: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-fira)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#ffffff",
        muted: {
          DEFAULT: "#808080",
          light: "#acacac",
          dark: "#5e5e5e",
          body: "#484848",
          soft: "#929292",
        },
        line: {
          DEFAULT: "#c0c0c0",
          soft: "#e5e7eb",
          faint: "rgba(0,0,0,0.08)",
        },
        panel: "#151515",
        card: "#e3e3e3",
        metric: "#f9f9f9",
        stroke: "#323232",
        accent: "rgba(204,0,0,0.85)",
      },
      letterSpacing: {
        nav: "0.18em",
        tag: "0.05em",
        tight2: "-0.022em",
      },
      maxWidth: {
        content: "1223px",
        inner: "1099px",
        study: "1170px",
      },
    },
  },
  plugins: [],
};
export default config;

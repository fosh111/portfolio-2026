import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--color-muted) / <alpha-value>)",
          light: "rgb(var(--color-muted-light) / <alpha-value>)",
          dark: "rgb(var(--color-muted-dark) / <alpha-value>)",
          body: "rgb(var(--color-muted-body) / <alpha-value>)",
          soft: "rgb(var(--color-muted-soft) / <alpha-value>)",
        },
        line: {
          DEFAULT: "rgb(var(--color-line) / <alpha-value>)",
          soft: "rgb(var(--color-line-soft) / <alpha-value>)",
          faint: "var(--color-line-faint)",
        },
        panel: "#151515",
        card: "rgb(var(--color-card) / <alpha-value>)",
        metric: "rgb(var(--color-metric) / <alpha-value>)",
        stroke: "rgb(var(--color-stroke) / <alpha-value>)",
        accent: "var(--color-accent)",
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

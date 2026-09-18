import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        "canvas-dark": "#07070C",
        surface: "#F4F4F8",
        "surface-dark": "#121218",
        ink: "#0B0B12",
        paper: "#F5F5FA",
        muted: "#5B5C72",
        "muted-dark": "#9797B0",
        line: "#E5E5EF",
        "line-dark": "#232332",
        indigo: "#6C63FF",
        violet: "#A78BFA",
        pink: "#EC4899",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
} satisfies Config;

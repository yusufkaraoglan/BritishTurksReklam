import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050713",
        midnight: "#0b1020",
        royal: "#6d5dfc",
        violet: "#a855f7",
        gold: "#f7c96b"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(11, 16, 32, 0.45)",
        glow: "0 0 42px rgba(109, 93, 252, 0.35)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080D18",
        surface: "#101827",
        accent: "#60CFFF",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(96, 207, 255, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#ffffff",
          secondary: "#f8f8f8",
          tertiary: "#f0f0f0",
        },
        accent: {
          primary: "#1a1a1a",
          secondary: "#404040",
        },
        text: {
          primary: "#0a0a0a",
          secondary: "#525252",
          muted: "#737373",
        },
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #1a1a1a 0%, #404040 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
        glow: "0 0 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;

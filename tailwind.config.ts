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
          primary: "#0a0a0f",
          secondary: "#12121a",
          tertiary: "#1a1a24",
        },
        accent: {
          primary: "#6366f1",
          secondary: "#8b5cf6",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        border: "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px rgba(99, 102, 241, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

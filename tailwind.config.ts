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
          primary: "var(--bg-primary)",
          secondary: "color-mix(in srgb, var(--bg-primary) 90%, var(--text-primary))",
          tertiary: "color-mix(in srgb, var(--bg-primary) 80%, var(--text-primary))",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "color-mix(in srgb, var(--text-primary) 70%, var(--bg-primary))",
          muted: "color-mix(in srgb, var(--text-primary) 50%, var(--bg-primary))",
        },
        border: "var(--border-color)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px color-mix(in srgb, var(--accent-primary) 30%, transparent)",
      },
    },
  },
  plugins: [],
};
export default config;

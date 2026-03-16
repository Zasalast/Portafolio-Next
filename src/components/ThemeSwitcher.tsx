"use client";

import { useTheme, themeOptions } from "./ThemeContext";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeColors: Record<string, string> = {
    dark: "#0a0a0f",
    light: "#ffffff",
    ocean: "#0a1628",
    sunset: "#1a0a0f",
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {themeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
            theme === option.value
              ? "border-accent-primary shadow-glow"
              : "border-border hover:border-accent-primary"
          }`}
          style={{
            backgroundColor: theme === option.value ? "var(--accent-primary)" : "var(--bg-primary)",
            color: theme === option.value ? "#fff" : "var(--text-primary)",
            borderColor: theme === option.value ? "var(--accent-primary)" : "var(--border-color)",
          }}
          title={option.label}
        >
          <span
            className="inline-block w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: themeColors[option.value] }}
          />
          {option.label}
        </button>
      ))}
    </div>
  );
}
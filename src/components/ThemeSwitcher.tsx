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

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as typeof theme)}
        className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          borderColor: "var(--border-color)",
        }}
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
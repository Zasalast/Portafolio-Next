"use client";

import { useTheme, themeOptions } from "./ThemeContext";
// Removed unused hooks; ThemeSwitcher only reads/writes from ThemeContext

type Theme = "dark" | "light" | "ocean" | "sunset";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <select
        value={theme}
        onChange={(e) => {
          const val = e.target.value as Theme;
          console.log('[ThemeSwitcher] changing theme ->', val);
          setTheme(val);
        }}
        className="px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer"
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

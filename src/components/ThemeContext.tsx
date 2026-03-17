"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light" | "ocean" | "sunset";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeConfigs: Record<Theme, { bg: string; text: string; accent: string; accent2: string; border: string }> = {
  dark: {
    bg: "#0a0a0f",
    text: "#f8fafc",
    accent: "#6366f1",
    accent2: "#8b5cf6",
    border: "#27272a",
  },
  light: {
    bg: "#ffffff",
    text: "#0a0a0a",
    accent: "#1a1a1a",
    accent2: "#404040",
    border: "#e5e5e5",
  },
  ocean: {
    bg: "#0a1628",
    text: "#e0f2fe",
    accent: "#06b6d4",
    accent2: "#14b8a6",
    border: "#1e3a5f",
  },
  sunset: {
    bg: "#1a0a0f",
    text: "#fef3c7",
    accent: "#f97316",
    accent2: "#ec4899",
    border: "#3b1f2b",
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme;
    if (saved && themeConfigs[saved]) {
      setTheme(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const config = themeConfigs[theme];
    const root = document.documentElement;
    root.style.setProperty("--bg-primary", config.bg);
    root.style.setProperty("--text-primary", config.text);
    root.style.setProperty("--accent-primary", config.accent);
    root.style.setProperty("--accent-secondary", config.accent2);
    root.style.setProperty("--border-color", config.border);
    root.style.setProperty("--background", config.bg);
    root.style.setProperty("--foreground", config.text);
    localStorage.setItem("portfolio-theme", theme);
    // Debug: log theme changes to help diagnose dropdown issues
    if (typeof window !== 'undefined') {
      console.debug('[ThemeContext] theme changed to', theme);
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

export const themeOptions: { value: Theme; label: string }[] = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "ocean", label: "Ocean" },
  { value: "sunset", label: "Sunset" },
];

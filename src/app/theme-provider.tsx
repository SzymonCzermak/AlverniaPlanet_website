"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

function getInitialTheme(): Theme {
  // SSR always renders dark to avoid hydration mismatch; real preference is applied on client.
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // On client, read persisted preference or media query, then update state.
    if (!hydrated) {
      const saved = (() => {
        try {
          const value = localStorage.getItem("theme");
          return value === "light" || value === "dark" ? value : null;
        } catch {
          return null;
        }
      })();
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const resolved: Theme = saved ?? (prefersDark ? "dark" : "light");
      if (resolved !== theme) setTheme(resolved);
      setHydrated(true);
    }

    const root = document.documentElement;
    root.classList.remove("theme-dark", "theme-light");
    root.classList.add(theme === "light" ? "theme-light" : "theme-dark");
    root.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme, hydrated]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

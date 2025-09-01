"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

type StoreState = {
  theme: Theme;
  setTheme(theme: Theme): void;
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const stored = localStorage.getItem("theme_store");

    if (stored === null) {
      return "system";
    }

    const parsed = JSON.parse(stored);
    return parsed.state?.theme || "system";
  } catch (e) {
    return "system";
  }
}

const useThemeStore = create(
  persist<StoreState>(
    (set) => ({
      theme: getInitialTheme(),

      setTheme(theme) {
        set((state) => ({ ...state, theme }));
      },
    }),
    {
      name: "theme_store",
    }
  )
);

export { useThemeStore, type Theme };

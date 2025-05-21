"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  showSupportMeCard: boolean;
  setShowSupportMeCard(show: boolean): void;
}

const useSettingsStore = create(
  persist<StoreState>(
    (set) => ({
      showSupportMeCard: true,

      setShowSupportMeCard(show) {
        set((state) => ({ ...state, showSupportMeCard: show }));
      },
    }),
    {
      name: "settings_store",
    }
  )
);

export { useSettingsStore };

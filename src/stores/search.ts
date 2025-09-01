"use client";

import { create } from "zustand";

type StoreState = {
  libraryQuery: string;
  setLibraryQuery(q: string): void;
};

const useSearchStore = create<StoreState>((set) => ({
  libraryQuery: "",

  setLibraryQuery(q) {
    set((state) => ({ ...state, libraryQuery: q }));
  },
}));

export { useSearchStore };

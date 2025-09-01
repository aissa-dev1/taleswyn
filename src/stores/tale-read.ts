"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookmarkedContent = {
  id?: string;
  taleId: string;
  contentText: string;
  contentIndex: number;
};

type StoreState = {
  fontSize: string;
  contentNumeralsActive: boolean;
  contentRomanNumeralsActive: boolean;
  bookmarkedContnetList: BookmarkedContent[];
  bookmarkedContentCardActive: boolean;
  setFontSize(size: string): void;
  setContentNumeralsActive(active: boolean): void;
  setContentRomanNumeralsActive(active: boolean): void;
  bookmarkContent(content: BookmarkedContent): void;
  setBookmarkedContentCardActive(active: boolean): void;
};

const useTaleReadStore = create(
  persist<StoreState>(
    (set) => ({
      fontSize: "20px",
      contentNumeralsActive: false,
      contentRomanNumeralsActive: true,
      bookmarkedContnetList: [],
      bookmarkedContentCardActive: true,

      setFontSize(size) {
        set((state) => ({ ...state, fontSize: size }));
      },
      setContentNumeralsActive(active) {
        set((state) => ({ ...state, contentNumeralsActive: active }));
      },
      setContentRomanNumeralsActive(active) {
        set((state) => ({ ...state, contentRomanNumeralsActive: active }));
      },
      bookmarkContent(content) {
        set((state) => {
          if (
            state.bookmarkedContnetList.find(
              (bc) => bc.taleId === content.taleId
            )
          ) {
            const bookmarkedContnetList = state.bookmarkedContnetList.filter(
              (bc) => bc.taleId !== content.taleId
            );
            return {
              ...state,
              bookmarkedContnetList: [
                ...bookmarkedContnetList,
                {
                  id: Date.now().toString(),
                  ...content,
                },
              ],
            };
          }

          return {
            ...state,
            bookmarkedContnetList: [
              ...state.bookmarkedContnetList,
              {
                id: Date.now().toString(),
                ...content,
              },
            ],
          };
        });
      },
      setBookmarkedContentCardActive(active) {
        set((state) => ({ ...state, bookmarkedContentCardActive: active }));
      },
    }),
    {
      name: "tale_read_store",
    }
  )
);

export { useTaleReadStore, type BookmarkedContent };

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkedContent {
  id?: string;
  storyId: string;
  contentText: string;
  contentIndex: number;
}

interface StoreState {
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
}

const useStoryReadStore = create(
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
              (bc) => bc.storyId === content.storyId
            )
          ) {
            const bookmarkedContnetList = state.bookmarkedContnetList.filter(
              (bc) => bc.storyId !== content.storyId
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
      name: "story_read_store",
    }
  )
);

export { useStoryReadStore, type BookmarkedContent };

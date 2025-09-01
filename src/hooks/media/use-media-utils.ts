"use client";

import { useMediaQuery } from "./use-media-query";

import { MOBILE_MAX_WIDTH } from "@/constants/media-query";

function useMinWidth(minWidth: number, defaultValue?: boolean): boolean {
  return useMediaQuery(`(min-width: ${minWidth}px)`, { defaultValue });
}

function useMaxWidth(maxWidth: number, defaultValue?: boolean): boolean {
  return useMediaQuery(`(max-width: ${maxWidth}px)`, { defaultValue });
}

function useIsMobile(defaultValue?: boolean): boolean {
  return useMaxWidth(MOBILE_MAX_WIDTH, defaultValue);
}

function useIsSystemDarkTheme(): boolean {
  return useMediaQuery("(prefers-color-scheme: dark)");
}

export { useMinWidth, useMaxWidth, useIsMobile, useIsSystemDarkTheme };

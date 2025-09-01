"use client";

import { useEffect } from "react";

function SeparatorHighlighter() {
  useEffect(() => {
    const separators = document.querySelectorAll('[role="separator"]');

    function handleScroll() {
      separators.forEach((separator) => {
        const rect = separator.getBoundingClientRect();

        if (rect.bottom < 0) {
          separator.setAttribute("data-highlighted", "true");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}

export { SeparatorHighlighter };

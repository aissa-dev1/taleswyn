"use client";

import { BookmarkIcon } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";

import { BookmarkedContent, useTaleReadStore } from "@/stores/tale-read";
import { useToastStore } from "@/stores/toast";

type Props = BookmarkedContent;

const BOOKMARK_DURATION_MS = 2000;

function TaleContentBookmarkButton({
  taleId,
  contentText,
  contentIndex,
}: Props) {
  const bookmarkContent = useTaleReadStore((s) => s.bookmarkContent);
  const bookmarkedContentCardActive = useTaleReadStore(
    (s) => s.bookmarkedContentCardActive
  );
  const setBookmarkedContentCardActive = useTaleReadStore(
    (s) => s.setBookmarkedContentCardActive
  );
  const addToast = useToastStore((s) => s.addToast);
  const [bookmarked, setBookmarked] = useState(false);
  const bookmarkTimout = useRef<NodeJS.Timeout>(null!);

  function handleBookmark() {
    bookmarkContent({ taleId, contentText, contentIndex });
    setBookmarked(true);

    if (!bookmarkedContentCardActive) {
      setBookmarkedContentCardActive(true);
    }

    addToast({
      title: "Done",
      description: "Tale content bookmarked successfully.",
      duration: BOOKMARK_DURATION_MS,
    });
    clearTimeout(bookmarkTimout.current);
    bookmarkTimout.current = setTimeout(() => {
      setBookmarked(false);
    }, BOOKMARK_DURATION_MS);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleBookmark}
      disabled={bookmarked}
    >
      <BookmarkIcon size={20} />
    </Button>
  );
}

export { TaleContentBookmarkButton };

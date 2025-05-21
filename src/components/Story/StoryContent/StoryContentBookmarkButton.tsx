"use client";

import { BookmarkIcon } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";

import { BookmarkedContent, useStoryReadStore } from "@/stores/story";
import { useToastStore } from "@/stores/toast";

interface Props extends BookmarkedContent {}

const BOOKMARK_DURATION_MS = 2000;

const StoryContentBookmarkButton: React.FC<Props> = ({
  storyId,
  contentText,
  contentIndex,
}) => {
  const bookmarkContent = useStoryReadStore((s) => s.bookmarkContent);
  const addToast = useToastStore((s) => s.addToast);
  const [bookmarked, setBookmarked] = useState(false);
  const bookmarkTimout = useRef<NodeJS.Timeout>(null!);

  function handleBookmark() {
    bookmarkContent({ storyId, contentText, contentIndex });
    setBookmarked(true);
    addToast({
      title: "Done",
      description: "Story content bookmarked successfully.",
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
};

export { StoryContentBookmarkButton };

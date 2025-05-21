"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ClosableCard,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { useStoryReadStore } from "@/stores/story";

import { scrollToElement } from "@/utils/scroll-to-element";

interface Props {
  storyId: string;
}

const StoryContentBookmarkedCard: React.FC<Props> = ({ storyId }) => {
  const bookmarkedContnetList = useStoryReadStore(
    (s) => s.bookmarkedContnetList
  );
  const bookmarkedContentCardActive = useStoryReadStore(
    (s) => s.bookmarkedContentCardActive
  );
  const setBookmarkedContentCardActive = useStoryReadStore(
    (s) => s.setBookmarkedContentCardActive
  );
  const bookmarkedContent = bookmarkedContnetList.find(
    (bc) => bc.storyId === storyId
  );

  if (!bookmarkedContent) return null;

  function handleFocus() {
    scrollToElement(`story_content_${bookmarkedContent?.contentIndex}`);
  }

  return (
    <ClosableCard
      active={bookmarkedContentCardActive}
      onActiveChange={setBookmarkedContentCardActive}
      centered
    >
      <CardHeader>
        <CardTitle>Bookmarked content</CardTitle>
        <CardDescription>{bookmarkedContent.contentText}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="inverse" onClick={handleFocus}>
          Jump to Content
        </Button>
      </CardContent>
    </ClosableCard>
  );
};

export { StoryContentBookmarkedCard };

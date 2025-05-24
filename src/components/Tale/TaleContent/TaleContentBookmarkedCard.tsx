"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ClosableCard,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { useTaleReadStore } from "@/stores/tale-read";

import { scrollToElement } from "@/utils/scroll-to-element";

interface Props {
  taleId: string;
}

const TaleContentBookmarkedCard: React.FC<Props> = ({ taleId }) => {
  const bookmarkedContnetList = useTaleReadStore(
    (s) => s.bookmarkedContnetList
  );
  const bookmarkedContentCardActive = useTaleReadStore(
    (s) => s.bookmarkedContentCardActive
  );
  const setBookmarkedContentCardActive = useTaleReadStore(
    (s) => s.setBookmarkedContentCardActive
  );
  const bookmarkedContent = bookmarkedContnetList.find(
    (bc) => bc.taleId === taleId
  );

  if (!bookmarkedContent) return null;

  function handleFocus() {
    scrollToElement(`tale_content_${bookmarkedContent?.contentIndex}`);
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

export { TaleContentBookmarkedCard };

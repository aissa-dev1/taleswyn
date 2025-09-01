"use client";

import styles from "./TaleContentBookmarkedCard.module.scss";

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

type Props = {
  taleId: string;
};

function TaleContentBookmarkedCard({ taleId }: Props) {
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

  function handleFocus() {
    if (bookmarkedContent !== undefined) {
      scrollToElement(`tale_content_${bookmarkedContent.contentIndex}`);
    }
  }

  if (bookmarkedContent === undefined) {
    return null;
  }

  return (
    <ClosableCard
      active={bookmarkedContentCardActive}
      onActiveChange={setBookmarkedContentCardActive}
      centered
    >
      <CardHeader>
        <CardTitle>Bookmarked content</CardTitle>
        <CardDescription className={styles.cardDescription}>
          {bookmarkedContent.contentText}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="inverse" onClick={handleFocus}>
          Jump to Content
        </Button>
      </CardContent>
    </ClosableCard>
  );
}

export { TaleContentBookmarkedCard };

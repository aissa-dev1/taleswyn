import Link from "next/link";

import { TextIcon } from "lucide-react";

import styles from "./FeaturedContentSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { StoryContent } from "@/components/Story";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Props {
  content: { contentText: string[]; storyName: string; storySlug: string };
}

const FeaturedContentSection: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.content}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured content
      </H1>
      {content?.storyName && (
        <div className={styles.badgeWrapper}>
          <Badge>{content.storyName}</Badge>
        </div>
      )}
      <Show
        when={!!content}
        fallback={
          <EmptyState
            icon={<TextIcon />}
            message="No featured content at the moment."
          />
        }
      >
        <div className={styles.contentList}>
          {content?.contentText.map((text, index) => (
            <StoryContent
              key={index}
              contentText={text}
              contentIndex={index}
              showBookmarkButton={false}
            />
          ))}
        </div>
        <div className={styles.continueReadingContainer}>
          <Link
            href={`/s/${content?.storySlug}/read`}
            className={styles.continueReadingLink}
          >
            <Button size="full">Continue Reading</Button>
          </Link>
        </div>
      </Show>
    </div>
  );
};

export { FeaturedContentSection };

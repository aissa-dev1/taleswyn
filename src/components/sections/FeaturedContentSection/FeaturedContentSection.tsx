import Link from "next/link";

import { TextIcon } from "lucide-react";

import styles from "./FeaturedContentSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { TaleContent } from "@/components/Tale";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Props {
  content: { contentText: string[]; taleName: string; taleSlug: string };
}

const FeaturedContentSection: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.content}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured content
      </H1>
      {content?.taleName && (
        <div className={styles.badgeWrapper}>
          <Badge>{content.taleName}</Badge>
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
            <TaleContent
              key={index}
              contentText={text}
              contentIndex={index}
              showBookmarkButton={false}
            />
          ))}
        </div>
        <div className={styles.continueReadingContainer}>
          <Link
            href={`/t/${content?.taleSlug}/read`}
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

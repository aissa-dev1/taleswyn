import { BookIcon } from "lucide-react";

import styles from "./LibraryStoriesSection.module.scss";

import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { Story } from "@/components/Story";
import { LibraryLoadMoreButton } from "@/components/buttons";

import { getLibraryStories, GetLibraryStoriesQuery } from "@/lib/data/story";

interface Props extends GetLibraryStoriesQuery {}

const LibraryStoriesSection: React.FC<Props> = async (props) => {
  const libraryStoriesResponse = await getLibraryStories({
    skip: props.skip,
    limit: props.limit,
    q: props.q ?? "",
    genre: props.genre ?? "all-genres",
  });

  return (
    <Show
      when={libraryStoriesResponse.data.length > 0}
      fallback={
        <EmptyState
          icon={<BookIcon />}
          message="No stories available yet. Check back later for new adventures!"
        />
      }
    >
      <div className={styles.stories}>
        {libraryStoriesResponse.data.map((story) => (
          <Story key={story._id} className={styles.story} {...story} />
        ))}
      </div>
      <LibraryLoadMoreButton
        limit={props.limit}
        count={libraryStoriesResponse.count}
      />
    </Show>
  );
};

export { LibraryStoriesSection };

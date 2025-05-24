import { BookIcon } from "lucide-react";

import styles from "./LibraryTalesSection.module.scss";

import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { Tale } from "@/components/Tale";
import { LibraryLoadMoreButton } from "@/components/buttons";

import { getLibraryTales, GetLibraryTalesQuery } from "@/lib/data/tale";

interface Props extends GetLibraryTalesQuery {}

const LibraryTalesSection: React.FC<Props> = (props) => {
  const libraryTalesResponse = getLibraryTales({
    skip: props.skip,
    limit: props.limit,
    q: props.q ?? "",
    genre: props.genre ?? "all-genres",
  });

  return (
    <Show
      when={libraryTalesResponse.data.length > 0}
      fallback={
        <EmptyState
          icon={<BookIcon />}
          message="No tales available yet. Check back later for new adventures!"
        />
      }
    >
      <div className={styles.tales}>
        {libraryTalesResponse.data.map((tale) => (
          <Tale key={tale._id} className={styles.tale} {...tale} />
        ))}
      </div>
      <LibraryLoadMoreButton
        limit={props.limit}
        count={libraryTalesResponse.count}
      />
    </Show>
  );
};

export { LibraryTalesSection };

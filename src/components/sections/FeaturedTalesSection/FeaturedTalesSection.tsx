import Link from "next/link";
import { BookIcon } from "lucide-react";

import styles from "./FeaturedTalesSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { Tale, TaleType } from "@/components/Tale";
import { Button } from "@/components/ui/Button";
import { FeaturedTalesSectionCarousel } from "./FeaturedTalesSectionCarousel";

type Props = {
  tales: TaleType[];
};

function FeaturedTalesSection({ tales }: Props) {
  return (
    <div className={styles.tales}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured tales
      </H1>
      <Show
        when={tales.length > 0}
        fallback={
          <EmptyState
            icon={<BookIcon />}
            message="No featured tales at the moment. Stay tuned for exciting tales!"
          />
        }
      >
        <FeaturedTalesSectionCarousel tales={tales} />
        <div className={styles.talesExploreMoreContainer}>
          <Link href="/t" className={styles.exploreLink}>
            <Button size="full">Browse All Realms</Button>
          </Link>
        </div>
      </Show>
    </div>
  );
}

export { FeaturedTalesSection };

import styles from "./FeaturedContentSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Skeleton } from "@/components/Skeleton";

function FeaturedContentSectionLoading() {
  return (
    <div className={styles.content}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured content
      </H1>
      <div className={styles.contentList}>
        <Skeleton type="card" count={6} height="125px" />
      </div>
    </div>
  );
}

export { FeaturedContentSectionLoading };

import styles from "./FeaturedTalesSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Skeleton } from "@/components/Skeleton";

interface Props {}

const FeaturedTalesSectionLoading: React.FC<Props> = () => {
  return (
    <div className={styles.tales}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured tales
      </H1>
      <div className={styles.talesList}>
        <Skeleton type="card" count={6} height="250px" />
      </div>
    </div>
  );
};

export { FeaturedTalesSectionLoading };

"use client";

import dynamic from "next/dynamic";

import styles from "./FeaturedTalesSection.module.scss";

import { FeaturedTale, TaleType } from "@/components/Tale";
import { Skeleton } from "@/components/Skeleton";

const Carousel = dynamic(
  () => import("@/components/ui/Carousel").then((mod) => mod.Carousel),
  {
    ssr: false,
    loading: () => <Skeleton type="card" height={450} />,
  }
);

type Props = {
  tales: TaleType[];
};

function FeaturedTalesSectionCarousel({ tales }: Props) {
  return (
    <Carousel>
      {tales.map((tale) => (
        <div key={tale._id} className={styles.carouselSlide}>
          <FeaturedTale tale={tale} />
        </div>
      ))}
    </Carousel>
  );
}

export { FeaturedTalesSectionCarousel };

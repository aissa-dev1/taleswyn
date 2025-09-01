"use client";

import { useCallback, PropsWithChildren } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./Carousel.module.scss";

type Props = PropsWithChildren & {
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};

const CAROUSEL_DEFAULT_OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  skipSnaps: true,
  inViewThreshold: 0.7,
};

const CAROUSEL_DEFAULT_PLUGINS: EmblaPluginType[] = [
  Autoplay({ delay: 5000, stopOnInteraction: false }),
];

function Carousel({
  options = CAROUSEL_DEFAULT_OPTIONS,
  plugins = CAROUSEL_DEFAULT_PLUGINS,
  children,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>{children}</div>
      </div>

      {emblaApi?.canScrollPrev() && (
        <button
          className={`${styles.scrollButton} ${styles.prev}`}
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ArrowLeftIcon />
        </button>
      )}
      {emblaApi?.canScrollNext() && (
        <button
          className={`${styles.scrollButton} ${styles.next}`}
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}

export { Carousel };

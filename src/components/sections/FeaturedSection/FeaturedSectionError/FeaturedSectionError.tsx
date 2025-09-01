"use client";

import styles from "./FeaturedSectionError.module.scss";

import { ErrorFallback, ErrorFallbackProps } from "@/components/ErrorFallback";
import { H1 } from "@/components/ui/Typography";

type Props = ErrorFallbackProps;

function FeaturedSectionError({ error, reset }: Props) {
  return (
    <div className={styles.container}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured section
      </H1>
      <ErrorFallback error={error} reset={reset} />
    </div>
  );
}

export { FeaturedSectionError };

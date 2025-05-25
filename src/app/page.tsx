import Link from "next/link";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { H1, P } from "@/components/ui/Typography";
import { CompactContainer, Container } from "@/components/ui/Container";
import {
  FeaturedSection,
  FeaturedSectionError,
  FeaturedSectionLoading,
  QuoteOfTheDaySection,
} from "@/components/sections";
import { HeroCanvasLazy } from "@/components/HeroCanvas/HeroCanvasLazy";
import { Main } from "@/components/Main";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Main withPaddingTop={false}>
      <Container withPaddingBlock withContentSpacing>
        <div className={styles.hero}>
          <HeroCanvasLazy />
          <div className={styles.heroContent}>
            <H1 transform="capitalize" variant="primary">
              Discover unforgettable tales
            </H1>
            <P>Read, imagine, and escape into worlds beyond your own.</P>
            <Link href="/t" className={styles.exploreLink}>
              <Button size="full">Explore Tales</Button>
            </Link>
          </div>
        </div>
        <ErrorBoundary errorComponent={FeaturedSectionError}>
          <Suspense fallback={<FeaturedSectionLoading />}>
            <FeaturedSection />
          </Suspense>
        </ErrorBoundary>
      </Container>
      <CompactContainer
        className={styles.quoteOfTheDayWrapper}
        withPaddingBlock
      >
        <QuoteOfTheDaySection />
      </CompactContainer>
    </Main>
  );
}

import { Suspense } from "react";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { LibraryFilters } from "@/components/LibraryFilters";
import { LibraryTalesSection } from "@/components/sections";
import { BackTopButton } from "@/components/buttons";
import { H1 } from "@/components/ui/Typography";
import { Main } from "@/components/Main";

import { PAGINATION_DEFAULT_LIMIT } from "@/constants/filter";
import { GetLibraryTalesQuery } from "@/lib/data/tale";

type Props = {
  searchParams: Promise<
    GetLibraryTalesQuery & {
      limit: number;
    }
  >;
};

export default async function Library(props: Props) {
  const searchParams = await props.searchParams;
  const limit = searchParams.limit
    ? Number(searchParams.limit)
    : PAGINATION_DEFAULT_LIMIT;

  return (
    <Main>
      <Container withPaddingBlock>
        <div className={styles.content}>
          <H1 className={styles.headline}>Library</H1>
          <LibraryFilters />
          <LibraryTalesSection
            skip={0}
            limit={limit}
            q={searchParams.q}
            genre={searchParams.genre}
          />
        </div>
        <BackTopButton />
      </Container>
    </Main>
  );
}

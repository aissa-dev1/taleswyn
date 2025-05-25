import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Tale, TaleAboutCard } from "@/components/Tale";
import { H1 } from "@/components/ui/Typography";
import { BackTopButton } from "@/components/buttons";
import { Main } from "@/components/Main";

import { getAllTales, getTaleBySlug } from "@/lib/data/tale";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tales = getAllTales();
  return tales.map((tale) => ({ slug: tale.slug }));
}

export default async function TalePage(props: Props) {
  const params = await props.params;
  const tale = await getTaleBySlug(params.slug);

  return (
    <Main>
      <Container withPaddingBlock>
        <H1
          variant="primary"
          transform="capitalize"
          className={styles.headline}
        >
          {tale.name}
        </H1>
        <div className={styles.taleContainer}>
          <Tale
            {...tale}
            shouldShowTitle={false}
            shouldShowExploreLink={false}
            shouldShowReadButton
          />
          <TaleAboutCard name={tale.name} about={tale.about} />
        </div>
        <BackTopButton />
      </Container>
    </Main>
  );
}

import styles from "./page.module.scss";

import {
  TaleBackButton,
  TaleContent,
  TaleContentBookmarkedCard,
} from "@/components/Tale";
import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { ToggleNavbarFixed } from "@/components/Navbar";
import { BackTopButton } from "@/components/buttons";
import { Main } from "@/components/Main";

import { getAllTales, getTaleBySlug } from "@/lib/data/tale";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const tales = getAllTales();
  return tales.map((tale) => ({ slug: tale.slug }));
}

export default async function ReadTalePage(props: Props) {
  const params = await props.params;
  const tale = await getTaleBySlug(params.slug);

  return (
    <>
      <SeparatorHighlighter />
      <ToggleNavbarFixed />
      <Main>
        <CompactContainer spacing="lg" withPaddingBlock>
          <TaleBackButton taleSlug={params.slug} />
          <H1
            variant="primary"
            transform="capitalize"
            className={styles.headline}
          >
            {tale.name}
          </H1>
          <TaleContentBookmarkedCard taleId={tale._id} />
          <Show
            when={tale.content.length > 0}
            fallback={
              <EmptyState message="A tale was supposed to be here... Perhaps the author is still writing?" />
            }
          >
            <div className={styles.taleContentList}>
              {tale.content.map((contentText, index) => (
                <TaleContent
                  key={index}
                  id={`tale_content_${index}`}
                  taleId={tale._id}
                  contentText={contentText}
                  contentIndex={index}
                />
              ))}
            </div>
          </Show>
          <BackTopButton />
        </CompactContainer>
      </Main>
    </>
  );
}

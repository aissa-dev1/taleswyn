import styles from "./page.module.scss";

import {
  StoryBackButton,
  StoryContent,
  StoryContentBookmarkedCard,
} from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { ToggleNavbarFixed } from "@/components/Navbar";
import { BackTopButton } from "@/components/buttons";
import { SupportMeCardLazy } from "@/components/cards/SupportMeCard/SupportMeCardLazy";

import { getAllStories, getStoryBySlug } from "@/lib/data/story";
import { useRef } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const stories = getAllStories();
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function ReadStory(props: Props) {
  const params = await props.params;
  const story = await getStoryBySlug(params.slug);

  return (
    <>
      <SeparatorHighlighter />
      <ToggleNavbarFixed />
      <main className={styles.main}>
        <CompactContainer spacing="lg" withPaddingBlock>
          <StoryBackButton storySlug={params.slug} />
          <H1
            variant="primary"
            transform="capitalize"
            className={styles.headline}
          >
            {story.name}
          </H1>
          <StoryContentBookmarkedCard storyId={story._id} />
          <Show
            when={story.content.length > 0}
            fallback={
              <EmptyState message="A story was supposed to be here... Perhaps the author is still writing?" />
            }
          >
            <div className={styles.storyContentList}>
              {story.content.map((contentText, index) => (
                <StoryContent
                  key={index}
                  id={`story_content_${index}`}
                  storyId={story._id}
                  contentText={contentText}
                  contentIndex={index}
                />
              ))}
            </div>
          </Show>
          <SupportMeCardLazy />
          <BackTopButton />
        </CompactContainer>
      </main>
    </>
  );
}

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import {
  Story,
  StoryAboutCard,
  StoryPreviewCard,
  StoryType,
} from "@/components/Story";
import { H1 } from "@/components/ui/Typography";
import { BackTopButton } from "@/components/buttons";

import { getAllStories, getStoryBySlug } from "@/lib/data/story";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const stories = getAllStories();
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage(props: Props) {
  const params = await props.params;
  const story = await getStoryBySlug(params.slug);

  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <H1
          variant="primary"
          transform="capitalize"
          className={styles.headline}
        >
          {story.name}
        </H1>
        <div className={styles.storyContainer}>
          <Story
            {...story}
            shouldShowTitle={false}
            shouldShowExploreLink={false}
            shouldShowReadButton
          />
          <StoryAboutCard name={story.name} about={story.about} />
          <StoryPreviewCard
            id={story._id}
            name={story.name}
            preview={story.preview}
          />
        </div>
        <BackTopButton />
      </Container>
    </main>
  );
}

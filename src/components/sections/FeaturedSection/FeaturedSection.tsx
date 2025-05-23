import { FeaturedContentSection } from "../FeaturedContentSection";
import { FeaturedStoriesSection } from "../FeaturedStoriesSection";

import { getFeaturedStories } from "@/lib/data/story";

interface Props {}

const FeaturedSection: React.FC<Props> = async () => {
  const featuredStoriesResponse = await getFeaturedStories();

  return (
    <>
      <FeaturedStoriesSection stories={featuredStoriesResponse.stories} />
      <FeaturedContentSection content={featuredStoriesResponse.content} />
    </>
  );
};

export { FeaturedSection };

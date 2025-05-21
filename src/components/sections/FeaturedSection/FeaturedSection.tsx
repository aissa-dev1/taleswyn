import { FeaturedStoriesSection } from "../FeaturedStoriesSection";

import { getFeaturedStories } from "@/lib/data/story";

interface Props {}

const FeaturedSection: React.FC<Props> = async () => {
  const featuredStories = await getFeaturedStories();

  return <FeaturedStoriesSection stories={featuredStories} />;
};

export { FeaturedSection };

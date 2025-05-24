import { FeaturedContentSection } from "../FeaturedContentSection";
import { FeaturedTalesSection } from "../FeaturedTalesSection";

import { getFeaturedTales } from "@/lib/data/tale";

interface Props {}

const FeaturedSection: React.FC<Props> = async () => {
  const featuredTalesResponse = await getFeaturedTales();

  return (
    <>
      <FeaturedTalesSection tales={featuredTalesResponse.tales} />
      <FeaturedContentSection content={featuredTalesResponse.content} />
    </>
  );
};

export { FeaturedSection };

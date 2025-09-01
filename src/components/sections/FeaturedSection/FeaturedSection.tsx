import { FeaturedContentSection } from "../FeaturedContentSection";
import { FeaturedTalesSection } from "../FeaturedTalesSection";

import { getFeaturedTales } from "@/lib/data/tale";

async function FeaturedSection() {
  const featuredTalesResponse = await getFeaturedTales();

  return (
    <>
      <FeaturedTalesSection tales={featuredTalesResponse.tales} />
      <FeaturedContentSection content={featuredTalesResponse.content} />
    </>
  );
}

export { FeaturedSection };

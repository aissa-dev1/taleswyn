import { FeaturedContentSectionLoading } from "../FeaturedContentSection";
import { FeaturedTalesSectionLoading } from "../FeaturedTalesSection";

function FeaturedSectionLoading() {
  return (
    <>
      <FeaturedTalesSectionLoading />
      <FeaturedContentSectionLoading />
    </>
  );
}

export { FeaturedSectionLoading };

import { FeaturedContentSectionLoading } from "../FeaturedContentSection";
import { FeaturedTalesSectionLoading } from "../FeaturedTalesSection";

interface Props {}

const FeaturedSectionLoading: React.FC<Props> = () => {
  return (
    <>
      <FeaturedTalesSectionLoading />
      <FeaturedContentSectionLoading />
    </>
  );
};

export { FeaturedSectionLoading };

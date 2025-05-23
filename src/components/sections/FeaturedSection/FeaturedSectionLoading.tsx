import { FeaturedContentSectionLoading } from "../FeaturedContentSection";
import { FeaturedStoriesSectionLoading } from "../FeaturedStoriesSection";

interface Props {}

const FeaturedSectionLoading: React.FC<Props> = () => {
  return (
    <>
      <FeaturedStoriesSectionLoading />
      <FeaturedContentSectionLoading />
    </>
  );
};

export { FeaturedSectionLoading };

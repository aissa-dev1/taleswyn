import { Skeleton } from "@/components/Skeleton";

interface Props {}

const LibraryTalesSectionLoading: React.FC<Props> = () => {
  return <Skeleton type="card" count={5} height="250px" />;
};

export { LibraryTalesSectionLoading };

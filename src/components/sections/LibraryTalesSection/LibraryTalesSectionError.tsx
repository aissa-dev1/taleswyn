"use client";

import { ErrorFallback, ErrorFallbackProps } from "@/components/ErrorFallback";

interface Props extends ErrorFallbackProps {}

const LibraryTalesSectionError: React.FC<Props> = (props) => {
  return <ErrorFallback {...props} />;
};

export { LibraryTalesSectionError };

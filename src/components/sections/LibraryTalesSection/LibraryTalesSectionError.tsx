"use client";

import { ErrorFallback, ErrorFallbackProps } from "@/components/ErrorFallback";

type Props = ErrorFallbackProps;

function LibraryTalesSectionError(props: Props) {
  return <ErrorFallback {...props} />;
}

export { LibraryTalesSectionError };

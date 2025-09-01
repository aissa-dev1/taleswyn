"use client";

import { BugIcon } from "lucide-react";

import { EmptyState } from "../EmptyState";

type ErrorFallbackProps = {
  error: Error;
  reset?: () => void;
};

function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  return <EmptyState icon={<BugIcon />} message={error.message} />;
}

export { ErrorFallback, type ErrorFallbackProps };

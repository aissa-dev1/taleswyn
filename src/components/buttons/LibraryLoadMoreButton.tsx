"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/Button";

import { PAGINATION_DEFAULT_LIMIT } from "@/constants/filter";

interface Props {
  limit: number;
  count: number;
}

const LibraryLoadMoreButton: React.FC<Props> = ({ limit, count }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleOnClick() {
    const params = new URLSearchParams(searchParams);
    params.set("limit", (limit + PAGINATION_DEFAULT_LIMIT).toString());
    router.push(`/s?${params.toString()}`, { scroll: false });
  }

  if (limit >= count) return null;

  return (
    <Button size="responsive" onClick={handleOnClick}>
      Load More Stories
    </Button>
  );
};

export { LibraryLoadMoreButton };

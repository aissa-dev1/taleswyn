"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./LibraryFilters.module.scss";

import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { useSearchStore } from "@/stores/search";

import { FILTER_DEFAULT_TIMEOUT } from "@/constants/filter";

interface Props {}

const LibraryFilters: React.FC<Props> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = useSearchStore((s) => s.libraryQuery);
  const setQuery = useSearchStore((s) => s.setLibraryQuery);
  const [genre, setGenre] = useState(searchParams.get("genre") || "all-genres");
  const filterTimoutRef = useRef<NodeJS.Timeout>(null!);

  function updateSearchParams(paramKey: string, paramValue: string) {
    const params = new URLSearchParams(searchParams);
    params.set(paramKey, paramValue);
    router.push(`/s?${params.toString()}`);
  }

  function handleQueryFilter(query: string) {
    clearTimeout(filterTimoutRef.current);
    filterTimoutRef.current = setTimeout(() => {
      if (query !== searchParams.get("q")) {
        updateSearchParams("q", query);
      }
    }, FILTER_DEFAULT_TIMEOUT);
  }

  function handleOnGenreChange(value: string) {
    setGenre(value);

    if (value !== searchParams.get("genre")) {
      updateSearchParams("genre", value);
    }
  }

  useEffect(() => {
    setQuery(searchParams.get("q") || "");

    return () => {
      setQuery("");
    };
  }, []);

  return (
    <div className={styles.container}>
      <Input
        label="Search stories"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleQueryFilter(e.target.value);
        }}
      />
      <div className={styles.genreSelectWrapper}>
        <Select value={genre} onValueChange={handleOnGenreChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-genres">All Genres</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export { LibraryFilters };

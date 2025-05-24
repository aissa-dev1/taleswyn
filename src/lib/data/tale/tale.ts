"use server";

import { TaleType } from "@/components/Tale";
import talesData from "@/data/tales.json";

interface GetLibraryTalesQuery {
  skip: number;
  limit: number;
  q: string;
  genre: string;
}

interface GetLibraryTalesResponse {
  data: TaleType[];
  count: number;
}

function getAllTales(): TaleType[] {
  return talesData as unknown as TaleType[];
}

async function getTaleGenres(): Promise<string[]> {
  const taleGenres = getAllTales().map((tale) => tale.genre);
  const taleGenresSet = new Set<string>();

  for (let i = 0; i < taleGenres.length; i++) {
    for (let j = 0; j < taleGenres[i].length; j++) {
      taleGenresSet.add(taleGenres[i][j]);
    }
  }

  return Array.from(taleGenresSet);
}

function getLibraryTales(query: GetLibraryTalesQuery): GetLibraryTalesResponse {
  const queryLower = query.q?.toLowerCase() || "";
  const genreFilter =
    query.genre?.toLowerCase() === "all-genres" || !query.genre
      ? undefined
      : query.genre.toLowerCase();

  const filteredTales = getAllTales().filter((tale) => {
    const nameMatches =
      queryLower === "" || tale.name.toLowerCase().includes(queryLower);
    const genreMatches =
      !genreFilter || tale.genre.some((g) => g.toLowerCase() === genreFilter);
    return nameMatches && genreMatches;
  });

  const data = filteredTales.slice(query.skip, query.skip + query.limit);

  return {
    data,
    count: filteredTales.length,
  };
}

interface GetFeaturedTalesResponse {
  tales: TaleType[];
  content: {
    contentText: string[];
    taleName: string;
    taleSlug: string;
  };
}

async function getFeaturedTales(): Promise<GetFeaturedTalesResponse> {
  const featuredTales = getAllTales().slice(0, 5);
  const featuredContentList = featuredTales.map((s) => ({
    contentText: s.content.slice(0, 6),
    taleName: s.name,
    taleSlug: s.slug,
  }));
  const featuredContent =
    featuredContentList[Math.floor(Math.random() * featuredContentList.length)];

  return {
    tales: featuredTales,
    content: featuredContent,
  };
}

async function getTaleBySlug(slug: string): Promise<TaleType> {
  const tale = getAllTales().find((s) => s.slug === slug);

  if (!tale) {
    throw new Error("No tale found.");
  }

  return tale;
}

export {
  getAllTales,
  getLibraryTales,
  getFeaturedTales,
  getTaleBySlug,
  getTaleGenres,
  type GetLibraryTalesQuery,
};

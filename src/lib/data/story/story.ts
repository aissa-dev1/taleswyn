"use server";

import { StoryType } from "@/components/Story";
import storiesData from "@/data/stories.json";

interface GetLibraryStoriesQuery {
  skip: number;
  limit: number;
  q: string;
  genre: string;
}

interface GetLibraryStoriesResponse {
  data: StoryType[];
  count: number;
}

function getAllStories(): StoryType[] {
  return storiesData as unknown as StoryType[];
}

async function getStoryGenres(): Promise<string[]> {
  const storyGenres = getAllStories().map((story) => story.genre);
  const storyGenresSet = new Set<string>();

  for (let i = 0; i < storyGenres.length; i++) {
    for (let j = 0; j < storyGenres[i].length; j++) {
      storyGenresSet.add(storyGenres[i][j]);
    }
  }

  return Array.from(storyGenresSet);
}

function getLibraryStories(
  query: GetLibraryStoriesQuery
): GetLibraryStoriesResponse {
  const queryLower = query.q?.toLowerCase() || "";
  const genreFilter =
    query.genre?.toLowerCase() === "all-genres" || !query.genre
      ? undefined
      : query.genre.toLowerCase();

  const filteredStories = getAllStories().filter((story) => {
    const nameMatches =
      queryLower === "" || story.name.toLowerCase().includes(queryLower);
    const genreMatches =
      !genreFilter || story.genre.some((g) => g.toLowerCase() === genreFilter);
    return nameMatches && genreMatches;
  });

  const data = filteredStories.slice(query.skip, query.skip + query.limit);

  return {
    data,
    count: filteredStories.length,
  };
}

interface GetFeaturedStoriesResponse {
  stories: StoryType[];
  content: {
    contentText: string[];
    storyName: string;
    storySlug: string;
  };
}

async function getFeaturedStories(): Promise<GetFeaturedStoriesResponse> {
  const featuredStories = getAllStories().slice(0, 5);
  const featuredContentList = featuredStories.map((s) => ({
    contentText: s.content.slice(0, 6),
    storyName: s.name,
    storySlug: s.slug,
  }));
  const featuredContent =
    featuredContentList[Math.floor(Math.random() * featuredContentList.length)];

  return {
    stories: featuredStories,
    content: featuredContent,
  };
}

async function getStoryBySlug(slug: string): Promise<StoryType> {
  const story = getAllStories().find((s) => s.slug === slug);

  if (!story) {
    throw new Error("No story found.");
  }

  return story;
}

export {
  getAllStories,
  getLibraryStories,
  getFeaturedStories,
  getStoryBySlug,
  getStoryGenres,
  type GetLibraryStoriesQuery,
};

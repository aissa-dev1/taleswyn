"use server";

import { StoryContentType, StoryType } from "@/components/Story";
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

async function getLibraryStories(
  query: GetLibraryStoriesQuery
): Promise<GetLibraryStoriesResponse> {
  const stories = getAllStories();
  const queryLower = query.q.toLowerCase();
  const filteredStories = stories.filter((story) => {
    return story.name.toLowerCase().includes(queryLower);
  });
  const data = filteredStories.slice(query.skip, query.limit);

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
  const stories = getAllStories();
  const featuredStories = stories.slice(0, 5);
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
  const stories = getAllStories();
  const story = stories.find((s) => s.slug === slug);

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
  type GetLibraryStoriesQuery,
};

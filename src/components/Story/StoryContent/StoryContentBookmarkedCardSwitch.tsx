"use client";

import { Switch } from "@/components/ui/Switch";

import { useStoryReadStore } from "@/stores/story";

interface Props {}

const StoryContentBookmarkedCardSwitch: React.FC<Props> = () => {
  const bookmarkedContentCardActive = useStoryReadStore(
    (s) => s.bookmarkedContentCardActive
  );
  const setBookmarkedContentCardActive = useStoryReadStore(
    (s) => s.setBookmarkedContentCardActive
  );

  return (
    <Switch
      id="story_content_bookmarked_card"
      checked={bookmarkedContentCardActive}
      onCheckedChange={(v) => setBookmarkedContentCardActive(v)}
    />
  );
};

export { StoryContentBookmarkedCardSwitch };

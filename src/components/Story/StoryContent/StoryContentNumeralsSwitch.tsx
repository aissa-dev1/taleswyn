"use client";

import { Switch } from "@/components/ui/Switch";

import { useStoryReadStore } from "@/stores/story";

interface Props {}

const StoryContentNumeralsSwitch: React.FC<Props> = () => {
  const contentNumeralsActive = useStoryReadStore(
    (s) => s.contentNumeralsActive
  );
  const setContentNumeralsActive = useStoryReadStore(
    (s) => s.setContentNumeralsActive
  );

  return (
    <Switch
      id="story_content_numerals"
      checked={contentNumeralsActive}
      onCheckedChange={(v) => setContentNumeralsActive(v)}
    />
  );
};

export { StoryContentNumeralsSwitch };

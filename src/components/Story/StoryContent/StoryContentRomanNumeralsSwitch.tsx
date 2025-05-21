"use client";

import { Switch } from "@/components/ui/Switch";

import { useStoryReadStore } from "@/stores/story";

interface Props {}

const StoryContentRomanNumeralsSwitch: React.FC<Props> = () => {
  const contentRomanNumeralsActive = useStoryReadStore(
    (s) => s.contentRomanNumeralsActive
  );
  const setContentRomanNumeralsActive = useStoryReadStore(
    (s) => s.setContentRomanNumeralsActive
  );

  return (
    <Switch
      id="story_content_roman_numerals"
      checked={contentRomanNumeralsActive}
      onCheckedChange={(v) => setContentRomanNumeralsActive(v)}
    />
  );
};

export { StoryContentRomanNumeralsSwitch };

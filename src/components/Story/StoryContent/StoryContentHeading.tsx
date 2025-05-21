"use client";

import { H3 } from "@/components/ui/Typography";

import { useStoryReadStore } from "@/stores/story";

import { romanize } from "@/utils/romanize";

interface Props {
  contentIndex: number;
}

const StoryContentHeading: React.FC<Props> = ({ contentIndex }) => {
  const contentNumeralsActive = useStoryReadStore(
    (s) => s.contentNumeralsActive
  );
  const contentRomanNumeralsActive = useStoryReadStore(
    (s) => s.contentRomanNumeralsActive
  );

  if (!contentNumeralsActive) return null;

  return (
    <H3>
      {contentRomanNumeralsActive
        ? romanize(contentIndex + 1)
        : contentIndex + 1}
    </H3>
  );
};

export { StoryContentHeading };

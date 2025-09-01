"use client";

import { H3 } from "@/components/ui/Typography";

import { useTaleReadStore } from "@/stores/tale-read";

import { romanize } from "@/utils/romanize";

type Props = {
  contentIndex: number;
};

function TaleContentHeading({ contentIndex }: Props) {
  const contentNumeralsActive = useTaleReadStore(
    (s) => s.contentNumeralsActive
  );
  const contentRomanNumeralsActive = useTaleReadStore(
    (s) => s.contentRomanNumeralsActive
  );

  if (!contentNumeralsActive) {
    return null;
  }

  return (
    <H3>
      {contentRomanNumeralsActive
        ? romanize(contentIndex + 1)
        : contentIndex + 1}
    </H3>
  );
}

export { TaleContentHeading };

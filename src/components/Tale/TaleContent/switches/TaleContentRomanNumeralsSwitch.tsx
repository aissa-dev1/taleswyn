"use client";

import { Switch } from "@/components/ui/Switch";

import { useTaleReadStore } from "@/stores/tale-read";

function TaleContentRomanNumeralsSwitch() {
  const contentRomanNumeralsActive = useTaleReadStore(
    (s) => s.contentRomanNumeralsActive
  );
  const setContentRomanNumeralsActive = useTaleReadStore(
    (s) => s.setContentRomanNumeralsActive
  );

  return (
    <Switch
      id="tale_content_roman_numerals"
      checked={contentRomanNumeralsActive}
      onCheckedChange={(v) => setContentRomanNumeralsActive(v)}
    />
  );
}

export { TaleContentRomanNumeralsSwitch };

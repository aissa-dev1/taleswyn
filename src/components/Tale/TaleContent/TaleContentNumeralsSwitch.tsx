"use client";

import { Switch } from "@/components/ui/Switch";

import { useTaleReadStore } from "@/stores/tale-read";

interface Props {}

const TaleContentNumeralsSwitch: React.FC<Props> = () => {
  const contentNumeralsActive = useTaleReadStore(
    (s) => s.contentNumeralsActive
  );
  const setContentNumeralsActive = useTaleReadStore(
    (s) => s.setContentNumeralsActive
  );

  return (
    <Switch
      id="tale_content_numerals"
      checked={contentNumeralsActive}
      onCheckedChange={(v) => setContentNumeralsActive(v)}
    />
  );
};

export { TaleContentNumeralsSwitch };

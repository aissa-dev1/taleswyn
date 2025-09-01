"use client";

import { Switch } from "@/components/ui/Switch";

import { useSettingsStore } from "@/stores/settings";

function SupportMeCardSwitch() {
  const showSupportMeCard = useSettingsStore((s) => s.showSupportMeCard);
  const setShowSupportMeCard = useSettingsStore((s) => s.setShowSupportMeCard);

  return (
    <Switch
      id="show_support_me_card"
      checked={showSupportMeCard}
      onCheckedChange={(v) => setShowSupportMeCard(v)}
    />
  );
}

export { SupportMeCardSwitch };

"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { BuyMeCoffeButton } from "@/components/buttons";

import { useSettingsStore } from "@/stores/settings";
import { ClosableCard } from "@/components/ui/Card";

interface Props {}

const SupportMeCard: React.FC<Props> = () => {
  const showSupportMeCard = useSettingsStore((s) => s.showSupportMeCard);
  const setShowSupportMeCard = useSettingsStore((s) => s.setShowSupportMeCard);

  if (!showSupportMeCard) return null;

  return (
    <ClosableCard
      active={showSupportMeCard}
      onActiveChange={setShowSupportMeCard}
      centered
    >
      <CardHeader>
        <CardTitle>Support the Journey 💜</CardTitle>
        <CardDescription>
          If this tale stirred something in you,
          <br />
          consider fueling the pen behind it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BuyMeCoffeButton />
      </CardContent>
    </ClosableCard>
  );
};

export { SupportMeCard };

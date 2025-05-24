import styles from "./TalePreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../../../cards/SettingsCard";
import {
  TaleContentBookmarkedCardSwitch,
  TaleContentFontSizeSelect,
  TaleContentNumeralsSwitch,
  TaleContentRomanNumeralsSwitch,
} from "@/components/Tale";

interface Props {}

const TalePreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Tale Preferences"
      description="Here you can change your tale preferences"
    >
      <SettingsCardItem label="Text size adjustment">
        <TaleContentFontSizeSelect />
      </SettingsCardItem>
      <SettingsCardItem
        label="Show bookmarked content card"
        labelHtmlFor="tale_content_bookmarked_card"
      >
        <TaleContentBookmarkedCardSwitch />
      </SettingsCardItem>
      <SettingsCardItem
        label="Show content numerals"
        labelHtmlFor="tale_content_numerals"
      >
        <TaleContentNumeralsSwitch />
      </SettingsCardItem>
      <SettingsCardItem
        label="Use roman content numerals"
        labelHtmlFor="tale_content_roman_numerals"
      >
        <TaleContentRomanNumeralsSwitch />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { TalePreferencesCard };

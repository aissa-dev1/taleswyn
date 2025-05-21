import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../../../cards/SettingsCard";
import {
  StoryContentBookmarkedCardSwitch,
  StoryContentFontSizeSelect,
  StoryContentNumeralsSwitch,
  StoryContentRomanNumeralsSwitch,
} from "@/components/Story";

interface Props {}

const StoryPreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Story Preferences"
      description="Here you can change your story preferences"
    >
      <SettingsCardItem label="Text size adjustment">
        <StoryContentFontSizeSelect />
      </SettingsCardItem>
      <SettingsCardItem
        label="Show bookmarked content card"
        labelHtmlFor="story_content_bookmarked_card"
      >
        <StoryContentBookmarkedCardSwitch />
      </SettingsCardItem>
      <SettingsCardItem
        label="Show content numerals"
        labelHtmlFor="story_content_numerals"
      >
        <StoryContentNumeralsSwitch />
      </SettingsCardItem>
      <SettingsCardItem
        label="Use roman content numerals"
        labelHtmlFor="story_content_roman_numerals"
      >
        <StoryContentRomanNumeralsSwitch />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { StoryPreferencesCard };

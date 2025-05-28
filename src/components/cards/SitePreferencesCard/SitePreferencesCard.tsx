import styles from "./SitePreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { SupportMeCardSwitch } from "../SupportMeCard";

interface Props {}

const SitePreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Site Preferences"
      description="Here you can change the site preferences"
    >
      <SettingsCardItem
        label="Show support me card"
        labelHtmlFor="show_support_me_card"
      >
        <SupportMeCardSwitch />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { SitePreferencesCard };

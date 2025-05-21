import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { SettingsCardsSection } from "@/components/sections";

export default function Settings() {
  return (
    <main className={styles.main}>
      <CompactContainer withPaddingBlock withContentSpacing>
        <H1 className={styles.headline}>Settings</H1>
        <div className={styles.sections}>
          <SettingsCardsSection />
        </div>
      </CompactContainer>
    </main>
  );
}

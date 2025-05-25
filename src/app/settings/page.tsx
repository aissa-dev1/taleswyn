import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { SettingsCardsSection } from "@/components/sections";
import { Main } from "@/components/Main";

export default function Settings() {
  return (
    <Main>
      <CompactContainer spacing="lg" withPaddingBlock>
        <H1 className={styles.headline}>Settings</H1>
        <div className={styles.sections}>
          <SettingsCardsSection />
        </div>
      </CompactContainer>
    </Main>
  );
}

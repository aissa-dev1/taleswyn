import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms";
import { Main } from "@/components/Main";

export default function ContactPage() {
  return (
    <Main>
      <CompactContainer spacing="lg" withPaddingBlock>
        <H1 className={styles.headline}>Contact</H1>
        <ContactForm />
      </CompactContainer>
    </Main>
  );
}

import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1, H3, P } from "@/components/ui/Typography";

import terms from "@/data/terms.json";

export default function TermsAndConditions() {
  return (
    <main className={styles.main}>
      <CompactContainer spacing="lg" withPaddingBlock>
        <H1 className={styles.headline}>Terms and Conditions</H1>
        <P size="xl" className={styles.tagline}>
          By using Short Stories, you agree to these Terms and Conditions. If
          you don’t agree, please don’t use the site.
        </P>
        <div className={styles.content}>
          {terms.map((term, index) => (
            <div key={index} className={styles.section}>
              <H3>{term.title}</H3>
              <div className={styles.content}>
                {term.content.map((contentText, index) => (
                  <P key={index}>{contentText}</P>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CompactContainer>
    </main>
  );
}

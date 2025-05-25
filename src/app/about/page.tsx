import Link from "next/link";

import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1, H3, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Main } from "@/components/Main";

import about from "@/data/about.json";

export default function About() {
  return (
    <Main>
      <CompactContainer spacing="lg" withPaddingBlock>
        <H1 className={styles.headline}>About Us</H1>
        <P size="xl" className={styles.tagline}>
          Taleswyn is more than just a platform, it’s a haven for readers. We’ve
          built a carefully curated library packed with tales from every genre,
          all designed to give you a unique and immersive reading experience.
        </P>
        <div className={styles.sectionWrapper}>
          {about.map((section, index) => (
            <div key={index} className={styles.section}>
              <H3 transform="capitalize">{section.title}</H3>
              <div className={styles.content}>
                {section.content.map((contentText, index) => (
                  <P key={index}>{contentText}</P>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <Link href="/t">
            <Button size="sm" variant="inverse">
              Library
            </Button>
          </Link>
          <Link href="/terms">
            <Button size="sm" variant="inverse">
              Terms and Conditions
            </Button>
          </Link>
        </div>
      </CompactContainer>
    </Main>
  );
}

import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1, P } from "@/components/ui/Typography";
import { Main } from "@/components/Main";

export default function Support() {
  return (
    <Main>
      <CompactContainer spacing="lg" withPaddingBlock>
        <H1 className={styles.headline}>Support 💜</H1>
        <P size="lg" className={styles.text}>
          If you enjoy the tales I write and the world I build, consider
          supporting me on Ko-fi. Every contribution fuels future creations ✨
        </P>
        <iframe
          id="kofiframe"
          className={styles.iframe}
          src="https://ko-fi.com/aissabedr/?hidefeed=true&widget=true&embed=true&preview=true"
          height="712"
          title="aissabedr"
        />
      </CompactContainer>
    </Main>
  );
}

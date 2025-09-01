import styles from "./QuoteOfTheDaySection.module.scss";

import { H1, P } from "@/components/ui/Typography";
import { QuoteBlock } from "@/components/QuoteBlock";

import quotes from "@/data/quotes.json";

function QuoteOfTheDaySection() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className={styles.section}>
      <H1 transform="capitalize" className={styles.headline}>
        Quote of the day
      </H1>
      <QuoteBlock quote={quote} />
    </div>
  );
}

export { QuoteOfTheDaySection };

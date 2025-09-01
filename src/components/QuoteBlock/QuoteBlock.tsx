import styles from "./QuoteBlock.module.scss";

type Quote = {
  id: string;
  quote: string;
  author?: string;
};

type Props = {
  quote: Quote;
};

function QuoteBlock({ quote }: Props) {
  return (
    <blockquote className={styles.quoteBlock}>
      <p className={styles.quoteText}>{quote.quote}</p>
      <footer className={styles.author}>— {quote?.author ?? "Unknown"}</footer>
    </blockquote>
  );
}

export { QuoteBlock };

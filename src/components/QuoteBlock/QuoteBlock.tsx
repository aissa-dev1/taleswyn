import styles from "./QuoteBlock.module.scss";

interface Quote {
  id: string;
  quote: string;
  author?: string;
}

interface QuoteBlockProps {
  quote: Quote;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote }) => {
  return (
    <blockquote className={styles.quoteBlock}>
      <p className={styles.quoteText}>{quote.quote}</p>
      <footer className={styles.author}>— {quote?.author ?? "Unknown"}</footer>
    </blockquote>
  );
};

export { QuoteBlock };

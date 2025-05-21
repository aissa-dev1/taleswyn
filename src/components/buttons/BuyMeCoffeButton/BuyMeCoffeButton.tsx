import styles from "./BuyMeCoffeButton.module.scss";

interface Props {}

const BuyMeCoffeButton: React.FC<Props> = () => {
  return (
    <a
      href="https://ko-fi.com/B0B6127DWV"
      target="_blank"
      className={styles.link}
    >
      <img
        className={styles.image}
        height="36"
        src="https://storage.ko-fi.com/cdn/kofi4.png?v=6"
        alt="Buy Me a Coffee at ko-fi.com"
      />
    </a>
  );
};

export { BuyMeCoffeButton };

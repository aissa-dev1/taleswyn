import { JSX } from "react";

import styles from "./Stats.module.scss";

import { Span } from "../ui/Typography";

type StatType = {
  id?: string;
  icon: JSX.Element;
  value: number | string;
};

type Props = {
  list: StatType[];
};

function Stats({ list }: Props) {
  return (
    <div className={styles.stats}>
      {list.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <div className={styles.iconWrapper}>{stat.icon}</div>
          <Span weight="bold">{stat.value}</Span>
        </div>
      ))}
    </div>
  );
}

export { Stats };

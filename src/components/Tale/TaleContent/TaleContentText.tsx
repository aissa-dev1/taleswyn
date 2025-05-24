"use client";

import clsx from "clsx";

import styles from "./TaleContent.module.scss";

import { P, ParagraphProps } from "@/components/ui/Typography";

import { useTaleReadStore } from "@/stores/tale-read";

interface Props extends ParagraphProps {}

const TaleContentText: React.FC<Props> = ({ className, style, ...rest }) => {
  const fontSize = useTaleReadStore((s) => s.fontSize);

  return (
    <P
      className={clsx(styles.contentText, className)}
      style={{ ...style, fontSize }}
      {...rest}
    />
  );
};

export { TaleContentText };

"use client";

import clsx from "clsx";

import styles from "./TaleContent.module.scss";

import { P, ParagraphProps } from "@/components/ui/Typography";

import { useTaleReadStore } from "@/stores/tale-read";

type Props = ParagraphProps;

function TaleContentText({ className, style, ...rest }: Props) {
  const fontSize = useTaleReadStore((s) => s.fontSize);

  return (
    <P
      className={clsx(styles.contentText, className)}
      style={{ ...style, fontSize }}
      {...rest}
    />
  );
}

export { TaleContentText };

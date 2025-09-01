"use client";

import { XIcon } from "lucide-react";

import { Button } from "../Button";
import { Card, CardProps } from "./Card";

import styles from "./Card.module.scss";

type Props = CardProps & {
  active?: boolean;
  onActiveChange?(active: boolean): void;
};

function ClosableCard({
  active = true,
  onActiveChange,
  children,
  ...rest
}: Props) {
  if (!active) {
    return null;
  }

  return (
    <Card {...rest}>
      {children}
      <Button
        className={styles.closeButton}
        size="icon"
        variant="ghost"
        aria-label="Close"
        onClick={() => onActiveChange?.(false)}
      >
        <XIcon size={20} />
      </Button>
    </Card>
  );
}

export { ClosableCard };

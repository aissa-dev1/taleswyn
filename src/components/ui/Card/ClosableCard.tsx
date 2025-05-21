"use client";

import { XIcon } from "lucide-react";

import { Button } from "../Button";
import { Card, CardProps } from "./Card";

import styles from "./Card.module.scss";

interface Props extends CardProps {
  active?: boolean;
  onActiveChange?(active: boolean): void;
}

const ClosableCard: React.FC<Props> = ({
  active = true,
  onActiveChange,
  children,
  ...rest
}) => {
  if (!active) return null;

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
};

export { ClosableCard };

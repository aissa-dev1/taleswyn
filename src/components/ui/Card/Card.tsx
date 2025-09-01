import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Card.module.scss";

import { P, Span } from "../Typography";

type CardVariant = "default" | "primary";

type CardProps = ComponentProps<"div"> & {
  variant?: CardVariant;
  withPadding?: boolean;
  centered?: boolean;
};

function Card({
  className,
  variant = "default",
  withPadding = false,
  centered = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        withPadding && styles.withPadding,
        centered && styles.centered,
        className
      )}
      {...rest}
    />
  );
}

type CardTitleProps = ComponentProps<"span">;

function CardTitle({ className, ...rest }: CardTitleProps) {
  return (
    <Span
      size="lg"
      weight="bold"
      transform="capitalize"
      className={clsx(styles.cardTitle, className)}
      {...rest}
    />
  );
}

type CardDescriptionProps = ComponentProps<"p">;

function CardDescription({ className, ...rest }: CardDescriptionProps) {
  return (
    <P
      variant="gray"
      className={clsx(styles.cardDescription, className)}
      {...rest}
    />
  );
}

type CardHeaderProps = ComponentProps<"div">;

function CardHeader({ className, ...rest }: CardHeaderProps) {
  return <div className={clsx(styles.cardHeader, className)} {...rest} />;
}

type CardContentProps = ComponentProps<"div">;

function CardContent({ className, ...rest }: CardContentProps) {
  return <div className={clsx(styles.cardContent, className)} {...rest} />;
}

type CardFooterProps = ComponentProps<"div">;

function CardFooter({ className, ...rest }: CardFooterProps) {
  return <div className={clsx(styles.cardFooter, className)} {...rest} />;
}

export {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  type CardProps,
};

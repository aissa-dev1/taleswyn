import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";

type Transform = "capitalize" | "uppercase";

type SharedProps = {
  transform?: Transform;
};

type HeadingVariant = "foreground" | "primary" | "heading";

type H1Props = ComponentProps<"h1"> &
  SharedProps & {
    variant?: HeadingVariant;
  };

function H1({ className, transform, variant = "heading", ...rest }: H1Props) {
  return (
    <h1
      className={clsx(
        styles.h1,
        transform && styles[transform],
        variant === "heading" ? styles.headingForeground : styles[variant],
        className
      )}
      {...rest}
    />
  );
}

type H2Props = ComponentProps<"h2"> &
  SharedProps & {
    variant?: HeadingVariant;
  };

function H2({
  className,
  transform,
  variant = "foreground",
  ...rest
}: H2Props) {
  return (
    <h2
      className={clsx(
        styles.h2,
        transform && styles[transform],
        variant === "heading" ? styles.headingForeground : styles[variant],
        className
      )}
      {...rest}
    />
  );
}

type H3Props = ComponentProps<"h3"> &
  SharedProps & {
    variant?: HeadingVariant;
  };

function H3({
  className,
  transform,
  variant = "foreground",
  ...rest
}: H3Props) {
  return (
    <h3
      className={clsx(
        styles.h3,
        transform && styles[transform],
        variant === "heading" ? styles.headingForeground : styles[variant],
        className
      )}
      {...rest}
    />
  );
}

type FontSize = "xs" | "sm" | "base" | "lg" | "xl" | "xxl";
type FontWeight = "normal" | "medium" | "semi-bold" | "bold";
type TextVariant = "foreground" | "primary" | "gray";

type ParagraphProps = ComponentProps<"p"> &
  SharedProps & {
    size?: FontSize;
    weight?: FontWeight;
    variant?: TextVariant;
  };

function P({
  className,
  size = "base",
  weight = "normal",
  variant = "foreground",
  transform,
  ...rest
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        styles.p,
        styles[size],
        styles[weight],
        styles[variant],
        transform && styles[transform],
        className
      )}
      {...rest}
    />
  );
}

type SpanProps = ComponentProps<"span"> &
  SharedProps & {
    size?: FontSize;
    weight?: FontWeight;
    variant?: TextVariant;
  };

function Span({
  className,
  size = "sm",
  weight = "normal",
  variant = "foreground",
  transform,
  ...rest
}: SpanProps) {
  return (
    <span
      className={clsx(
        styles.span,
        styles[size],
        styles[weight],
        styles[variant],
        transform && styles[transform],
        className
      )}
      {...rest}
    />
  );
}

export { H1, H2, H3, P, Span, type ParagraphProps, type SpanProps };

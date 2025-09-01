import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Badge.module.scss";

type BadgeVariant = "primary" | "secondary" | "page" | "inverse";

type BadgeSize = "sm" | "md" | "lg";

type Props = ComponentProps<"div"> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

function Badge({
  className,
  variant = "primary",
  size = "md",
  ...rest
}: Props) {
  return (
    <div
      className={clsx(styles.badge, styles[variant], styles[size], className)}
      {...rest}
    />
  );
}

export { Badge };

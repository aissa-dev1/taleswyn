import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.scss";

type ContainerProps = ComponentProps<"div"> & {
  withPaddingBlock?: boolean;
  withContentSpacing?: boolean;
  spacing?: "none" | "lg" | "xl";
};

function Container({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  spacing = "none",
  ...rest
}: ContainerProps) {
  return (
    <div
      className={clsx(
        styles.container,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        styles[spacing],
        className
      )}
      {...rest}
    />
  );
}

export { Container, type ContainerProps };

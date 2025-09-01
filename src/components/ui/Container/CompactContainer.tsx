import clsx from "clsx";

import styles from "./Container.module.scss";

import { ContainerProps } from "./Container";

type Props = ContainerProps;

function CompactContainer({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  spacing = "none",
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        styles.compactContainer,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        styles[spacing],
        className
      )}
      {...rest}
    />
  );
}

export { CompactContainer };

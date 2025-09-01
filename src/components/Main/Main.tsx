import clsx from "clsx";

import { ComponentProps } from "react";

import styles from "./Main.module.scss";

type Props = ComponentProps<"main"> & {
  withPaddingTop?: boolean;
  withAnimation?: boolean;
};

function Main({
  className,
  withPaddingTop = true,
  withAnimation = true,
  ...rest
}: Props) {
  return (
    <main
      className={clsx(
        styles.main,
        className,
        withPaddingTop && styles.withPaddingTop,
        withAnimation && styles.withAnimation
      )}
      {...rest}
    />
  );
}

export { Main };

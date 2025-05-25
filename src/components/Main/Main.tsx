import clsx from "clsx";

import { ComponentProps } from "react";

import styles from "./Main.module.scss";

interface Props extends ComponentProps<"main"> {
  withPaddingTop?: boolean;
  withAnimation?: boolean;
}

const Main: React.FC<Props> = ({
  className,
  withPaddingTop = true,
  withAnimation = true,
  ...rest
}) => {
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
};

export { Main };

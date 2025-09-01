import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.scss";

type InputVariant = "default" | "destructive";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label: string;
  variant?: InputVariant;
};

function Input({ className, label, variant = "default", ...rest }: Props) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(
          styles.input,
          variant === "destructive" && styles.inputDestructive,
          className
        )}
        placeholder=" "
        {...rest}
      />
      <label
        className={clsx(
          styles.label,
          variant === "destructive" && styles.labelDestructive
        )}
      >
        {label}
      </label>
    </div>
  );
}

export { Input, type InputVariant };

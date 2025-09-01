"use client";

import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Form.module.scss";

type Props = ComponentProps<"form"> & {
  preventDefault?: boolean;
  spacing?: "sm" | "md";
};

function Form({
  className,
  preventDefault = true,
  spacing = "sm",
  onSubmit,
  ...rest
}: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (preventDefault) {
      e.preventDefault();
    }
    if (typeof onSubmit === "function") {
      onSubmit(e);
    }
  }

  return (
    <form
      className={clsx(styles.form, styles[spacing], className)}
      onSubmit={handleSubmit}
      {...rest}
    />
  );
}

export { Form };

"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";
import styles from "./Switch.module.scss";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={clsx(styles.switchRoot, className)}
    {...props}
  >
    <SwitchPrimitive.Thumb className={clsx(styles.switchThumb)} />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };

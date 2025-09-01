import clsx from "clsx";

import styles from "./SettingsCard.module.scss";

import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";

type Props = {
  direction?: "col" | "row";
  label: string;
  labelHtmlFor?: string;
  children: React.ReactNode;
};

function SettingsCardItem({
  direction = "row",
  label,
  labelHtmlFor,
  children,
}: Props) {
  return (
    <>
      <div
        className={clsx(
          styles.cardItem,
          direction === "row" ? styles.cardItemRow : styles.cardItemCol
        )}
      >
        <Label htmlFor={labelHtmlFor}>{label}</Label>
        <div>{children}</div>
      </div>
      <Separator className={styles.cardItemSeparator} />
    </>
  );
}

export { SettingsCardItem };

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import styles from "./TaleBackButton.module.scss";

import { Button } from "@/components/ui/Button";

type Props = {
  taleSlug: string | undefined;
};

function TaleBackButton({ taleSlug }: Props) {
  return (
    <Link
      href={taleSlug ? `/t/${taleSlug}` : "/t"}
      className={styles.backToTale}
    >
      <Button variant="ghost" size="icon">
        <ArrowLeftIcon />
      </Button>
    </Link>
  );
}

export { TaleBackButton };

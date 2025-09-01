import Link from "next/link";
import Image from "next/image";

import styles from "./FeaturedTale.module.scss";

import { TaleType } from "../Tale";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Props = {
  tale: TaleType;
};

function FeaturedTale({ tale }: Props) {
  return (
    <Card className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={tale.coverImage}
          alt={`${tale.name} Cover`}
          className={styles.image}
          fill
        />
      </div>
      <CardContent className={styles.content}>
        <CardTitle>{tale.name}</CardTitle>
        <CardDescription>{tale.description}</CardDescription>
        <Link href={`/t/${tale.slug}`} className={styles.actionLink}>
          <Button size="md">Enter the World</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export { FeaturedTale };

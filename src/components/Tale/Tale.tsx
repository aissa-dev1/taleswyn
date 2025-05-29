import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";

import styles from "./Tale.module.scss";

import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Stats } from "../Stats";

interface TaleType {
  _id: string;
  name: string;
  slug: string;
  description: string;
  about: string[];
  content: string[];
  genre: string[];
  coverImage: string;
  createdAt: Date;
}

interface Props extends TaleType {
  className?: string;
  shouldShowTitle?: boolean;
  shouldShowExploreLink?: boolean;
  shouldShowReadButton?: boolean;
}

const Tale: React.FC<Props> = ({
  _id,
  name,
  slug,
  description,
  genre,
  coverImage,
  createdAt,
  className,
  shouldShowTitle = true,
  shouldShowExploreLink = true,
  shouldShowReadButton = false,
}) => {
  return (
    <Card withPadding className={clsx(styles.tale, className)}>
      <div className={styles.genre}>
        {genre.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <div className={styles.coverImageWrapper}>
        <Image
          className={styles.coverImage}
          src={coverImage}
          alt={`${name} Cover`}
          width={175}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        {shouldShowTitle && <CardTitle>{name}</CardTitle>}
        <CardDescription>{description}</CardDescription>
        <div className={styles.actions}>
          {shouldShowExploreLink && (
            <Link href={`/t/${slug}`} className={styles.actionLink}>
              <Button>Enter the World</Button>
            </Link>
          )}
          {shouldShowReadButton && (
            <Link href={`/t/${slug}/read`}>
              <Button>Begin Reading</Button>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.statsWrapper}>
        <Stats
          list={[
            {
              icon: <CalendarIcon size={16} />,
              value: dayjs(new Date(createdAt)).format("DD/MM/YYYY"),
            },
          ]}
        />
      </div>
    </Card>
  );
};

export { Tale, type TaleType };

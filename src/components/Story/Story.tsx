import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import dayjs from "dayjs";

import styles from "./Story.module.scss";

import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Stats } from "../Stats";
import { CalendarIcon } from "lucide-react";

interface StoryType {
  _id: string;
  name: string;
  slug: string;
  description: string;
  about: string[];
  preview: string[];
  content: string[];
  genre: string[];
  coverImage: string;
  createdAt: Date;
}

interface Props extends StoryType {
  className?: string;
  shouldShowTitle?: boolean;
  shouldShowExploreLink?: boolean;
  shouldShowReadButton?: boolean;
}

const Story: React.FC<Props> = ({
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
    <Card withPadding className={clsx(styles.story, className)}>
      <div className={styles.genre}>
        {genre.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <Image
        className={styles.coverImage}
        src="/short-story-cover.jpeg"
        alt={`${name} Cover`}
        width={178.5}
        height={200}
      />
      <div className={styles.content}>
        {shouldShowTitle && <CardTitle>{name}</CardTitle>}
        <CardDescription>{description}</CardDescription>
        <div className={styles.actions}>
          {shouldShowExploreLink && (
            <Link href={`/s/${slug}`} className={styles.actionLink}>
              <Button>Explore</Button>
            </Link>
          )}
          {shouldShowReadButton && (
            <Link href={`/s/${slug}/read`}>
              <Button>Read</Button>
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

export { Story, type StoryType };

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import styles from "./StoryBackButton.module.scss";

import { Button } from "@/components/ui/Button";

interface Props {
  storySlug: string | undefined;
}

const StoryBackButton: React.FC<Props> = ({ storySlug }) => {
  return (
    <Link
      href={storySlug ? `/s/${storySlug}` : "/s"}
      className={styles.backToStory}
    >
      <Button variant="ghost" size="icon">
        <ArrowLeftIcon />
      </Button>
    </Link>
  );
};

export { StoryBackButton };

import styles from "./StoryContent.module.scss";

import { ClipboardButton } from "@/components/buttons";
import { Separator } from "@/components/ui/Separator";
import { StoryContentHeading } from "./StoryContentHeading";
import { StoryContentText } from "./StoryContentText";
import { StoryContentBookmarkButton } from "./StoryContentBookmarkButton";

type StoryContentType = {
  _id: string;
  storyId: string;
  content: string[];
};

interface Props {
  showHeaderTools?: boolean;
  showBookmarkButton?: boolean;
  storyId?: string;
  contentText: string;
  contentIndex: number;
  id?: string;
}

const StoryContent: React.FC<Props> = ({
  showHeaderTools = true,
  showBookmarkButton = true,
  storyId,
  contentIndex,
  contentText,
  id,
}) => {
  return (
    <div className={styles.content} id={id}>
      <div className={styles.contentHeader}>
        <div>
          <StoryContentHeading contentIndex={contentIndex} />
        </div>
        {showHeaderTools && (
          <div className={styles.contentHeaderTools}>
            <ClipboardButton
              text={contentText}
              message="Story content copied to clipboard."
            />
            {showBookmarkButton && (
              <StoryContentBookmarkButton
                storyId={storyId || ""}
                contentText={contentText}
                contentIndex={contentIndex}
              />
            )}
          </div>
        )}
      </div>
      <StoryContentText>{contentText}</StoryContentText>
      <Separator />
    </div>
  );
};

export { StoryContent, type StoryContentType };

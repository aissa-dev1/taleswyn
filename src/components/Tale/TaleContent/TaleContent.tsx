import styles from "./TaleContent.module.scss";

import { ClipboardButton } from "@/components/buttons";
import { Separator } from "@/components/ui/Separator";
import { TaleContentHeading } from "./TaleContentHeading";
import { TaleContentText } from "./TaleContentText";
import { TaleContentBookmarkButton } from "./TaleContentBookmarkButton";

type TaleContentType = {
  _id: string;
  taleId: string;
  content: string[];
};

interface Props {
  showHeaderTools?: boolean;
  showBookmarkButton?: boolean;
  taleId?: string;
  contentText: string;
  contentIndex: number;
  id?: string;
}

const TaleContent: React.FC<Props> = ({
  showHeaderTools = true,
  showBookmarkButton = true,
  taleId,
  contentIndex,
  contentText,
  id,
}) => {
  return (
    <div className={styles.content} id={id}>
      <div className={styles.contentHeader}>
        <div>
          <TaleContentHeading contentIndex={contentIndex} />
        </div>
        {showHeaderTools && (
          <div className={styles.contentHeaderTools}>
            <ClipboardButton
              text={contentText}
              message="Tale content copied to clipboard."
            />
            {showBookmarkButton && (
              <TaleContentBookmarkButton
                taleId={taleId || ""}
                contentText={contentText}
                contentIndex={contentIndex}
              />
            )}
          </div>
        )}
      </div>
      <TaleContentText>{contentText}</TaleContentText>
      <Separator />
    </div>
  );
};

export { TaleContent, type TaleContentType };

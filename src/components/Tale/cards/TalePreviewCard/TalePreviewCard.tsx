import { EyeIcon } from "lucide-react";

import styles from "./TalePreviewCard.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";
import { TaleContent } from "../../TaleContent";

interface Props {
  id: string;
  name: string;
  preview: string[];
}

const TalePreviewCard: React.FC<Props> = ({ id, name, preview }) => {
  return (
    <Card>
      <CardHeader>
        <P
          size="xl"
          weight="semi-bold"
          transform="capitalize"
          className={styles.uiFont}
        >
          {name}'s preview
        </P>
      </CardHeader>
      <CardContent>
        <Show
          when={preview.length > 0}
          fallback={
            <EmptyState
              icon={<EyeIcon />}
              message="No preview available. Start reading to explore the tale!"
            />
          }
        >
          <div className={styles.taleContentList}>
            {preview.map((contentText, index) => (
              <TaleContent
                key={index}
                contentText={contentText}
                contentIndex={index}
                showBookmarkButton={false}
              />
            ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
};

export { TalePreviewCard };

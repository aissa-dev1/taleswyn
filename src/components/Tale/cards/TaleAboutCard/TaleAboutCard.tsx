import { InfoIcon } from "lucide-react";

import styles from "./TaleAboutCard.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";

type Props = {
  name: string;
  about: string[];
};

function TaleAboutCard({ name, about }: Props) {
  return (
    <Card>
      <CardHeader>
        <P
          size="xl"
          weight="semi-bold"
          transform="capitalize"
          className={styles.uiFont}
        >
          About this Tale
        </P>
      </CardHeader>
      <CardContent>
        <Show
          when={about.length > 0}
          fallback={
            <EmptyState
              icon={<InfoIcon />}
              message="The author hasn't shared more details yet, but the tale awaits!"
            />
          }
        >
          <div className={styles.aboutCardDescriptions}>
            {about.map((item, i) => (
              <P key={i}>{item}</P>
            ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
}

export { TaleAboutCard };

import styles from "./SettingsCard.module.scss";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function SettingsCard({ title, description, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={styles.cardContent}>{children}</CardContent>
    </Card>
  );
}

export { SettingsCard };

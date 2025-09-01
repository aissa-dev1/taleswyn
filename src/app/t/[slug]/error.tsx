"use client";

import { useEffect } from "react";

import styles from "./page.module.scss";

import { Callout } from "@/components/Callout";
import { Container } from "@/components/ui/Container";

import { useToastStore } from "@/stores/toast";

type Props = {
  error: Error;
  reset?: () => void;
};

export default function TalePageError(props: Props) {
  const addToast = useToastStore((s) => s.addToast);

  useEffect(() => {
    addToast({
      title: "Error loading tale",
      description: props.error.message,
      variant: "error",
    });
  }, []);

  return (
    <main className={styles.noTaleMain}>
      <Container withPaddingBlock>
        <Callout
          message="This tale hasn’t been written yet… or maybe it got lost!"
          href="/t"
          buttonText="Back to Library"
        />
      </Container>
    </main>
  );
}

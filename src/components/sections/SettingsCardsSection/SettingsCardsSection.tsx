"use client";

import dynamic from "next/dynamic";

import styles from "./SettingsCardsSection.module.scss";

import { Skeleton } from "@/components/Skeleton";

const SitePreferencesCard = dynamic(
  () => import("@/components/cards").then((mod) => mod.SitePreferencesCard),
  {
    loading: () => <Skeleton type="card" />,
    ssr: false,
  }
);

const StoryPreferencesCard = dynamic(
  () => import("@/components/Story").then((mod) => mod.StoryPreferencesCard),
  {
    loading: () => <Skeleton type="card" />,
    ssr: false,
  }
);

interface Props {}

const SettingsCardsSection: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <SitePreferencesCard />
      <StoryPreferencesCard />
    </div>
  );
};

export { SettingsCardsSection };

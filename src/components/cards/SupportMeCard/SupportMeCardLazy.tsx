"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/Skeleton";

const SupportMeCard = dynamic(
  () => import("./SupportMeCard").then((mod) => mod.SupportMeCard),
  {
    loading: () => <Skeleton type="card" />,
    ssr: false,
  }
);

interface Props {}

const SupportMeCardLazy: React.FC<Props> = () => {
  return <SupportMeCard />;
};

export { SupportMeCardLazy };

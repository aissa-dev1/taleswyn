"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
  }
);

interface Props {}

const HeroCanvasLazy: React.FC<Props> = () => {
  return <HeroCanvas />;
};

export { HeroCanvasLazy };

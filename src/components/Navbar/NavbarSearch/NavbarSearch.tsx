"use client";

import styles from "./NavbarSearch.module.scss";

import { NavbarSearchDrawer } from "./NavbarSearchDrawer";
import { NavbarSearchDialog } from "./NavbarSearchDialog";

import { useIsMobile } from "@/hooks/media";

function NavbarSearch() {
  const isMobile = useIsMobile();

  return isMobile ? <NavbarSearchDrawer /> : <NavbarSearchDialog />;
}

export { NavbarSearch };

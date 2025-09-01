"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./NavbarDrawer.module.scss";

import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";

import { navBarLinks } from "../Navbar";

function NavbarDrawer() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className={styles.menuButtonContainer}>
          <Button variant="inverse" size="icon">
            <MenuIcon size={20} />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Taleswyn</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <div className={styles.drawerLinks}>
              {navBarLinks.map((link, i) => (
                <Link key={i} href={link.href} onClick={toggleOpen}>
                  <Button variant="ghost" className={styles.drawerButton}>
                    <span
                      className={
                        pathName === link.href
                          ? styles.drawerActiveLinkText
                          : ""
                      }
                    >
                      {link.name}
                    </span>
                  </Button>
                </Link>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}

export { NavbarDrawer };

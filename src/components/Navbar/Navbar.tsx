import Link from "next/link";

import styles from "./Navbar.module.scss";

import { NavbarLink } from "./NavbarLink";
import { NavbarDrawer } from "./NavbarDrawer";
import { P } from "../ui/Typography";
import { Container } from "../ui/Container";
import { NavbarSearch } from "./NavbarSearch";

import { navBarLinks } from "@/data/links";

function Navbar() {
  return (
    <nav className={styles.nav} data-nav-fixed="true">
      <Container className={styles.navContainer}>
        <div className={styles.startContent}>
          <NavbarDrawer />
          <Link href="/">
            <P size="lg" weight="bold" className={styles.title}>
              Taleswyn
            </P>
          </Link>
        </div>
        <div className={styles.endContent}>
          <div className={styles.links}>
            {navBarLinks.map((link, i) => (
              <NavbarLink key={i} href={link.href}>
                {link.name}
              </NavbarLink>
            ))}
          </div>
          <div className={styles.searchAndThemeContainer}>
            <NavbarSearch />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export { Navbar, navBarLinks };

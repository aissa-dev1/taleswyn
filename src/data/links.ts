type LinkType = {
  name: string;
  href: string;
};

const navBarLinks: LinkType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Library",
    href: "/s",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "Support 💜",
    href: "/support",
  },
];

const authLinks: LinkType[] = [
  {
    name: "Sign in",
    href: "/sign-in",
  },
  {
    name: "Sign up",
    href: "/sign-up",
  },
];

const footerLinks: LinkType[] = [
  ...navBarLinks,
  {
    name: "Terms and Conditions",
    href: "/terms",
  },
];

export { navBarLinks, authLinks, footerLinks };

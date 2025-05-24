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
    href: "/t",
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

const footerLinks: LinkType[] = [
  ...navBarLinks,
  {
    name: "Terms and Conditions",
    href: "/terms",
  },
];

export { navBarLinks, footerLinks };

"use client";

import { MenuItem } from "@/types";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import NavbarTop from "./NavbarTop";

export default function AppbarTop({}) {
  const menuItems = [
    {
      title: "Components",
      mobileTitle: "Explore Components",
      href: "/components",
      slug: "components",
      mobileColor: "blue-cta",
      icon: <CodeBracketIcon className="w-7" />,
    },
    {
      title: "About",
      href: "/",
      slug: "about",
      // active: true,
    },
    {
      title: "Separator-a",
      slug: "separator-a",
      appearance: "separator",
      // visibleForDevice: "mobile-only",
    },
    {
      title: "Support",
      href: "/support",
      slug: "support",
      // visibleForDevice: "mobile-only",
    },
  ] as MenuItem[];
  return (
    <div className={"appbar-top"}>
      <div className="appbar-container">
        <h1 aria-hidden="true" className="visually-hidden">
          UI Component Code Gallery for React - by Mirado Andria
        </h1>
        <nav className="navbar">
          <NavbarTop menuItems={menuItems} />
        </nav>
      </div>
    </div>
  );
}

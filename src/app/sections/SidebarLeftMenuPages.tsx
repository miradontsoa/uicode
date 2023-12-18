"use client";

import Icon from "@/app-components/ui/icons/Icon";
import IconCode from "@/app-components/ui/icons/IconCode";
import SidebarNavigation from "@/app-components/ui/navigation/SidebarNavigation";
import { MenuItem } from "@/types";
import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";

export default function SidebarLeftMenuPages() {
  const segment = useSelectedLayoutSegment();
  const parentPath = "/pages";
  const menuItems: MenuItem[] = [
    {
      title: "List section",
      href: "./list-section",
      slug: "list-section",
    }, 
    {
      title: "Pricing section",
      href: "./pricing-section",
      slug: "pricing-section",
    }, 
    {
      title: "Landing section",
      href: "./landing-section",
      slug: "landing-section",
    }, 
    {
      title: "Coming soon section",
      href: "./coming-soon",
      slug: "coming-soon",
    }, 
    {
      title: "Dashboard",
      href: "./dashboard",
      slug: "dashboard",
    }, 
  ];
  return (
    <SidebarNavigation
      menuItems={menuItems.map((menuItem) => {
        return {
          ...menuItem,
          active: menuItem.slug === segment,
          href: `${parentPath}/${menuItem.href}`,
        };
      })}
      icon={<IconCode />}
      title={"Sections"}
      onSearch={(text) => {
        console.log(text);
      }}
    />
  );
}

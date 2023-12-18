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
      title: "List page",
      href: "./list-page",
      slug: "list-page",
    }, 
    {
      title: "Pricing page",
      href: "./pricing-page",
      slug: "pricing-page",
    }, 
    {
      title: "Landing page",
      href: "./landing-page",
      slug: "landing-page",
    }, 
    {
      title: "Coming soon page",
      href: "./coming-soon",
      slug: "coming-soon",
    }, 
    {
      title: "Dashbooard",
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
      title={"Pages"}
      onSearch={(text) => {
        console.log(text);
      }}
    />
  );
}

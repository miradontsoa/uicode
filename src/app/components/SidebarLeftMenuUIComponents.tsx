"use client";

import IconCode from "@/app-components/ui/icons/IconCode";
import SidebarNavigation from "@/app-components/ui/navigation/SidebarNavigation";
import { categoryGroups } from "@/lib/data/componentsData/categoryGroups";
import { MenuItem } from "@/types";

import { useSelectedLayoutSegment } from "next/navigation";

export default function SidebarLeftMenuUIComponents() {
  const segment = useSelectedLayoutSegment();
  const parentPath = "/components";
  /* const menuItems: MenuItem[] = componentCategories.map((category) => {
    return {
      title: category.title,
      href: `./${category.slug}`,
      slug: category.slug,
    };
  });  */
  const menuItems: MenuItem[] = categoryGroups.flatMap((categoryGroup) => {
    const separatorMenuItem: MenuItem = {
      title: categoryGroup.title,
      slug: categoryGroup.slug,
      appearance: "separator",
    };
    const categoriesMenuItems = categoryGroup?.categories?.map((category) => {
      return {
        title: category.title,
        href: `./${category.slug}`,
        slug: category.slug,
      };
    }) as MenuItem[];
    return [separatorMenuItem, ...categoriesMenuItems];
  });

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
      title={"UI Components"}
      /* onSearch={(text) => {
        console.log(text);
      }} */
    />
  );
}

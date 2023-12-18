import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import HeaderBarAExample from "@/code/components/header-bar/header-bar-a/example-wrapper";
import HeaderBarBExample from "@/code/components/header-bar/header-bar-b/example-wrapper";
import HeaderBarMobileAExample from "@/code/components/header-bar/header-bar-mobile-a/example-wrapper";

const headerBarComponents: ComponentItem[] = [
  {
    slug: "header-bar-a",
    title: "Header Bar A",
    access: "premium",
    previewWidth: "large",
    shortDesc: "Header bar for large screen devices",
    previewBgClass: "bg-gradient-gray-light",
    description: "Header menu, menu bar, bottom header bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A34&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "header-bar-b",
    title: "Header Bar B",
    access: "premium",
    previewWidth: "large",
    shortDesc: "Header bar for large screen devices",
    previewBgClass: "bg-gradient-gray-light",
    description: "Header menu, menu bar, bottom header bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A34&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "header-bar-mobile-a",
    title: "Header Bar Mobile A",
    access: "any",
    previewWidth: "medium",
    shortDesc: "Header bar for mobile screen devices",
    previewBgClass: "bg-gradient-gray-light",
    description: "Header menu, menu bar, bottom header bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=202-1317&mode=design&t=DYX25tvC2QYcwpoW-4",
  },
];

const headerBarPreviews: ComponentPreviews = {
  "header-bar-a": <HeaderBarAExample />,
  "header-bar-b": <HeaderBarBExample />,
  "header-bar-mobile-a": <HeaderBarMobileAExample />,
};

export const headerBarCategory: ComponentCategory = {
  slug: "header-bar",
  title: "Header Bar",
  description: "Header components, including header menus, top bars",
  seo: "Explore our comprehensive selection of header components, including header menus and top bars",
  components: headerBarComponents,
  previews: headerBarPreviews,
};

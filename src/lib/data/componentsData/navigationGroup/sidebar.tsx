import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import SidebarAExample from "@/code/components/sidebar/sidebar-a/example-wrapper";
import SidebarBExample from "@/code/components/sidebar/sidebar-b/example-wrapper";
import SidebarCExample from "@/code/components/sidebar/sidebar-c/example-wrapper";

const sidebarComponents: ComponentItem[] = [
  {
    slug: "sidebar-a",
    title: "Sidebar A",
    access: "any",
    shortDesc: "Sidebar menu",
    previewBgClass: "bg-gradient-gray-light",
    description: "Sidebar menu.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=97%3A2&t=H5goa2kmCTDUAvNM-1",
  },
  {
    slug: "sidebar-b",
    title: "Sidebar B",
    access: "premium",
    shortDesc: "Expandable sidebar menu",
    previewBgClass: "bg-gradient-gray-light",
    description: "Expandable sidebar menu.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=97%3A2&t=H5goa2kmCTDUAvNM-1",
  },
  {
    slug: "sidebar-c",
    title: "Sidebar C",
    access: "premium",
    shortDesc: "Sidebar menu",
    previewBgClass: "bg-gradient-gray-light",
    description: "Sidebar menu, navigation item title at bottom.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=97%3A2&t=H5goa2kmCTDUAvNM-1",
  },
];

const sidebarPreviews: ComponentPreviews = {
  "sidebar-a": <SidebarAExample />,
  "sidebar-b": <SidebarBExample />,
  "sidebar-c": <SidebarCExample />,
};

export const sidebarCategory: ComponentCategory = {
  slug: "sidebar",
  title: "Sidebar",
  description: "Sidebar navigation components",
  seo: "Sidebar navigation components, including navigation menus.",
  components: sidebarComponents,
  previews: sidebarPreviews,
};

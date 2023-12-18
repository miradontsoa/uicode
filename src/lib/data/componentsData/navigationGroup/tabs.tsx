import TabsRadixuiAExample from "@/code/components/tabs/tabs-radixui-a/example-wrapper";
import TabsRadixuiBExample from "@/code/components/tabs/tabs-radixui-b/example-wrapper";
import TabsRadixuiCExample from "@/code/components/tabs/tabs-radixui-c/example-wrapper";
import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";

const tabsComponents: ComponentItem[] = [
  {
    slug: "tabs-radixui-a",
    title: "Tabs A (Radix UI)",
    access: "premium",
    shortDesc: "Tabs navigation",
    previewBgClass: "bg-gradient-gray-light",
    description: "Tabs navigation.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=142%3A854&mode=design&t=n3jTkrdh9MWJ0H2d-1",
  },
  {
    slug: "tabs-radixui-b",
    title: "Tabs B (Radix UI)",
    access: "premium",
    shortDesc: "Tabs navigation",
    previewBgClass: "bg-gradient-gray-light",
    description: "Tabs navigation.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=142%3A854&mode=design&t=n3jTkrdh9MWJ0H2d-1",
  },
  {
    slug: "tabs-radixui-c",
    title: "Tabs C (Radix UI)",
    access: "premium",
    shortDesc: "Tabs navigation",
    previewBgClass: "bg-gradient-gray-light",
    description: "Tabs navigation.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=142%3A854&mode=design&t=n3jTkrdh9MWJ0H2d-1",
  },
];

const tabsPreviews: ComponentPreviews = {
  "tabs-radixui-a": <TabsRadixuiAExample />,
  "tabs-radixui-b": <TabsRadixuiBExample />,
  "tabs-radixui-c": <TabsRadixuiCExample />,
};

export const tabsCategory: ComponentCategory = {
  slug: "tabs",
  title: "Tabs navigation",
  description: "Tabs navigation",
  seo: "Explore our comprehensive selection of tabs navigation components, including navigation menus and bottom bars",
  components: tabsComponents,
  previews: tabsPreviews,
};

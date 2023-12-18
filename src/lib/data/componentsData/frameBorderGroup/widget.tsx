import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import WidgetAExample from "@/code/components/widget/widget-a/example-wrapper";

// cards, transluscent glass, skeumorphism,
const widgetComponents: ComponentItem[] = [
  {
    slug: "widget-a",
    title: "Widget A",
    access: "premium",
    shortDesc: "Widget layout, with header and footer.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Widget layout, with header and footer.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=146%3A2159&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  
];

const widgetPreviews: ComponentPreviews = {
  "widget-a": <WidgetAExample/>, 
};

export const widgetCategory: ComponentCategory = {
  slug: "widget",
  title: "Widget",
  description: "Widget layout, with header and footer.",
  seo: "Widget layout, with header and footer.",
  components: widgetComponents,
  previews: widgetPreviews,
};

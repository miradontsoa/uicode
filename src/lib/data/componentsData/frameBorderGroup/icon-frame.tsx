import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import IconFrameA from "@/code/components/icon-frame/icon-frame-a/example-wrapper";
import IconFrameB from "@/code/components/icon-frame/icon-frame-b/example-wrapper";
import IconFrameC from "@/code/components/icon-frame/icon-frame-c/example-wrapper";
import IconFrameD from "@/code/components/icon-frame/icon-frame-d/example-wrapper";
import IconFrameE from "@/code/components/icon-frame/icon-frame-e/example-wrapper";

// cards, transluscent glass, skeumorphism,
const iconFrameComponents: ComponentItem[] = [
  {
    slug: "icon-frame-a",
    title: "Icon Frame A",
    access: "any",
    shortDesc: "Icon frame with solid background color.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Icon frame with solid background color.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=105%3A167&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "icon-frame-b",
    title: "Icon Frame B",
    access: "premium",
    shortDesc: "Icon frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Icon frame with solid background color and border.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=105%3A167&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "icon-frame-c",
    title: "Icon Frame C",
    access: "premium",
    shortDesc: "Icon frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Icon frame with linear gradient background color and thin border.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=105%3A167&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "icon-frame-d",
    title: "Icon Frame D",
    access: "premium",
    shortDesc: "Icon frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Icon frame with an outline outer border.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=105%3A167&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "icon-frame-e",
    title: "Icon Frame E",
    access: "premium",
    shortDesc: "Icon frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Icon frame with an outline inner border.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=105%3A167&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
];

const iconFramePreviews: ComponentPreviews = {
  "icon-frame-a": <IconFrameA/>,
  "icon-frame-b": <IconFrameB/>,
  "icon-frame-c": <IconFrameC/>,
  "icon-frame-d": <IconFrameD/>,
  "icon-frame-e": <IconFrameE/>,
};

export const iconFrameCategory: ComponentCategory = {
    slug: "icon-frame",
    title: "Icon Frame",
    // description: "Decorative elements that enhances icons or small graphics on a web page or app user interface. It adds a visually appealing border or enclosure around the icon, making it stand out.",
    description: "Decorative elements that enhances icons or small graphics on a web page or app user interface.",
    seo: "A decorative element that enhances icons or small graphics on a web page or app user interface. It adds a visually appealing border or enclosure around the icon, making it stand out.",
    components: iconFrameComponents,
    previews: iconFramePreviews
  };

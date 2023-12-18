import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import CardFrameAExample from "@/code/components/frame/card-frame-a/example-wrapper";
import GlassFrameAExample from "@/code/components/frame/glass-frame-a/example-wrapper";
import GlassFrameBExample from "@/code/components/frame/glass-frame-b/example-wrapper";
import GlassFrameCExample from "@/code/components/frame/glass-frame-c/example-wrapper";

// cards, transluscent glass, skeumorphism,
const frameComponents: ComponentItem[] = [
  {
    slug: "card-frame-a",
    title: "Card Frame A",
    access: "any",
    shortDesc: "Card style frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card style frame.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=103%3A73&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "glass-frame-a",
    title: "Glass Frame A",
    access: "premium",
    shortDesc: "Glass style frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Glass style frame.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=103%3A73&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "glass-frame-b",
    title: "Glass Frame B",
    access: "premium",
    shortDesc: "Glass style frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Glass style frame.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=103%3A73&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "glass-frame-c",
    title: "Glass Frame C",
    access: "premium",
    shortDesc: "Glass style frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Glass style frame.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=103%3A73&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
];

const framePreviews: ComponentPreviews = {
  "card-frame-a": <CardFrameAExample/>,
  "glass-frame-a": <GlassFrameAExample/>,
  "glass-frame-b": <GlassFrameBExample/>,
  "glass-frame-c": <GlassFrameCExample/>,
};

export const frameCategory: ComponentCategory = {
  slug: "frame",
  title: "Frame",
  description: "Decorative frame and border.",
  seo: "Frame and container",
  components: frameComponents,
  previews: framePreviews,
};

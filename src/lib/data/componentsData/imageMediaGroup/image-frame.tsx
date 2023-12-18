import { ComponentCategory, ComponentItem } from "@/types";
import ImageFrameAExample from "@/code/components/image-frame/image-frame-a/example-wrapper";
import ImageFrameBExample from "@/code/components/image-frame/image-frame-b/example-wrapper";
import ImageFrameCExample from "@/code/components/image-frame/image-frame-c/example-wrapper";
import ImageFrameDExample from "@/code/components/image-frame/image-frame-d/example-wrapper";

const imageFrameComponents: ComponentItem[] = [
  {
    slug: "image-frame-a",
    title: "Image Frame A",
    access: "any",
    shortDesc: "Image with background color.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Image with background color.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A2&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "image-frame-b",
    title: "Image Frame B",
    access: "premium",
    shortDesc: "Three pictures layout.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Three pictures layout.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A2&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "image-frame-c",
    title: "Image Frame C",
    access: "premium",
    shortDesc: "Two pictures layout.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Two pictures layout.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A2&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "image-frame-d",
    title: "Image Frame D",
    access: "premium",
    shortDesc: "Two pictures layout.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Two pictures layout.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A2&t=HSsDXGexK0KThPA3-1",
  },
];

const imageFramePreviews = {
  "image-frame-a": <ImageFrameAExample/>,
  "image-frame-b": <ImageFrameBExample/>,
  "image-frame-c": <ImageFrameCExample/>,
  "image-frame-d": <ImageFrameDExample/>,
};

export const imageFrameCategory: ComponentCategory = {
  slug: "image-frame",
  title: "Image Frame",
  // description: "Use these components to present or arrange image",
  description: "Use these components to present or arrange images",
  seo: "Use these components to present or arrange images",
  components: imageFrameComponents,
  previews: imageFramePreviews,
};
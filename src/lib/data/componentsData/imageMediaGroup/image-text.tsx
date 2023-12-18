import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import ImageTextAExample from "@/code/components/image-text/image-text-a/example-wrapper";
import ImageTextBExample from "@/code/components/image-text/image-text-b/example-wrapper";
import ImageTextCExample from "@/code/components/image-text/image-text-c/example-wrapper";
import ImageTextDExample from "@/code/components/image-text/image-text-d/example-wrapper";

const imageTextComponents: ComponentItem[] = [
  {
    slug: "image-text-a",
    title: "Image Text A",
    access: "any",
    shortDesc: "Picture with text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Picture with text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A301&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "image-text-b",
    title: "Image Text B",
    access: "premium",
    shortDesc: "Picture with text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Picture with text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A301&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "image-text-c",
    title: "Image Text C",
    access: "premium",
    shortDesc: "Picture with text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Picture with text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A301&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "image-text-d",
    title: "Image Text D",
    access: "premium",
    shortDesc: "Picture with text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Picture with text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A301&t=HSsDXGexK0KThPA3-1",
  },
];

const imageTextPreviews: ComponentPreviews = {
  "image-text-a": <ImageTextAExample />,
  "image-text-b": <ImageTextBExample />,
  "image-text-c": <ImageTextCExample />,
  "image-text-d": <ImageTextDExample />,
};

export const imageTextCategory: ComponentCategory = {
  slug: "image-text",
  title: "Image Text",
  description:
    "Use these components for presentation and arrangement of picture with accompanying text.",
  seo: "Use these components for presentation and arrangement of picture with accompanying text.",
  components: imageTextComponents,
  previews: imageTextPreviews,
};

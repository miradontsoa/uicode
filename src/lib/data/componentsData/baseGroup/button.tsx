import ButtonAExample from "@/code/components/button/button-a/example-wrapper";
import ButtonBExample from "@/code/components/button/button-b/example-wrapper";
import ButtonCExample from "@/code/components/button/button-c/example-wrapper";
import ButtonDExample from "@/code/components/button/button-d/example-wrapper";
import ButtonEExample from "@/code/components/button/button-e/example-wrapper";
import ButtonFExample from "@/code/components/button/button-f/example-wrapper";
import ButtonTextAExample from "@/code/components/button/button-text-a/example-wrapper";
import ButtonTextBExample from "@/code/components/button/button-text-b/example-wrapper";
import ButtonTextCExample from "@/code/components/button/button-text-c/example-wrapper";
import ButtonTextDExample from "@/code/components/button/button-text-d/example-wrapper";
import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
 
/* export const buttonInfo: ComponentCategory = {
  title: "Button",
  // description: "Button components",
  description:
    "Enhance user interactions with a diverse range of button component.",
  seo: "Enhance user interactions with a diverse range of button component.",
}; */

const buttonComponents: ComponentItem[] = [
  {
    slug: "button-a",
    title: "Button A",
    access: "any",
    shortDesc: "Button with background color.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button with background color.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-b",
    title: "Button B",
    access: "premium",
    shortDesc: "Button with background color.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button with background color and flat shadow.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-c",
    title: "Button C",
    access: "any",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Button with outline border",
    description: "Button with outline border.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-d",
    title: "Button D",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Button with outline border",
    description: "Button with outline border and flat shadow.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-e",
    title: "Button E",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Button with background color and highlighted icon.",
    description: "Button with background color and highlighted icon.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-f",
    title: "Button F",
    access: "premium",
    shortDesc: "Button with background color and outline border.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button with background color and outline border.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-text-a",
    title: "Button Text A",
    access: "premium",
    shortDesc: "Button text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-text-b",
    title: "Button Text B",
    access: "premium",
    shortDesc: "Button text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-text-c",
    title: "Button Text C",
    access: "premium",
    shortDesc: "Button text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "button-text-d",
    title: "Button Text D",
    access: "premium",
    shortDesc: "Button text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Button text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "button-tailwind-a", // experimental
    title: "Button Tailwind D",
    access: "premium",
    shortDesc: "Button tailwind.",
    bgClass: "bg-gradient-gray-light",
    description: "Button tailwind.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A36&t=HSsDXGexK0KThPA3-1"
  }, */
];

const buttonPreviews: ComponentPreviews = {
  "button-a": <ButtonAExample />,
  "button-b": <ButtonBExample />,
  "button-c": <ButtonCExample />,
  "button-d": <ButtonDExample />,
  "button-e": <ButtonEExample />,
  "button-f": <ButtonFExample />,
  "button-text-a": <ButtonTextAExample />,
  "button-text-b": <ButtonTextBExample />,
  "button-text-c": <ButtonTextCExample />,
  "button-text-d": <ButtonTextDExample />,
  // "button-tailwind-a": <ButtonTailwindAExample/>),
};

export const buttonCategory: ComponentCategory = {
  slug: "button",
  title: "Button",
  description:
    "Enhance user interactions with a diverse range of button component.",
  seo: "Enhance user interactions with a diverse range of button component.",
  components: buttonComponents,
  previews: buttonPreviews,
};

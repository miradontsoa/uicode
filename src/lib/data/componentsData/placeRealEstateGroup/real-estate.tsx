import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import RealEstateAExample from "@/code/components/real-estate/real-estate-a/example-wrapper";
import RealEstateBExample from "@/code/components/real-estate/real-estate-b/example-wrapper";
import RealEstateCExample from "@/code/components/real-estate/real-estate-c/example-wrapper";
import RealEstateDExample from "@/code/components/real-estate/real-estate-d/example-wrapper";

const realEstateComponents: ComponentItem[] = [
  {
    slug: "real-estate-a",
    title: "Location Real estate A",
    access: "premium",
    shortDesc:
      "Component that represents a real estate item such as house, apartment, hotel...",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Component that represents a real estate item such as house, apartment, hotel...",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=56%3A626&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "real-estate-b",
    title: "Location Real estate B",
    access: "premium",
    shortDesc:
      "Component that represents a real estate item such as house, apartment, hotel...",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Component that represents a real estate item such as house, apartment, hotel...",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=56%3A626&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "real-estate-c",
    title: "Location Real estate C",
    access: "premium",
    shortDesc:
      "Component that represents a real estate item such as house, apartment, hotel...",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Component that represents a real estate item such as house, apartment, hotel...",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=56%3A626&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "real-estate-d",
    title: "Location Real estate D",
    access: "premium",
    shortDesc:
      "Component that represents a real estate item such as house, apartment, hotel...",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Component that represents a real estate item such as house, apartment, hotel...",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=56%3A626&t=HSsDXGexK0KThPA3-1",
  },
];

const realEstatePreviews: ComponentPreviews = {
  "real-estate-a": <RealEstateAExample/>,
  "real-estate-b": <RealEstateBExample/>,
  "real-estate-c": <RealEstateCExample/>,
  "real-estate-d": <RealEstateDExample/>,
};

export const realEstateCategory: ComponentCategory = {
  slug: "real-estate",
  title: "Real estate",
  description:
    "Components designed for representing list of real estate items (house, building, land, apartment, hotel, ...).",
  seo: "Components designed for representing list of real estate items (house, building, land, apartment, hotel, ...).",
  components: realEstateComponents,
  previews: realEstatePreviews,
};

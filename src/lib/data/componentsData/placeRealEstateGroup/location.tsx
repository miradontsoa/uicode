import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import LocationItemA from "@/code/components/location/location-item-a/example-wrapper";
import LocationItemB from "@/code/components/location/location-item-b/example-wrapper";

const locationComponents: ComponentItem[] = [
  {
    slug: "location-item-a",
    title: "Location Item A",
    access: "premium",
    shortDesc: "Location Item with background color",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a location of an item or a a product varient card.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A379&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "location-item-b",
    title: "Location Item B",
    access: "premium",
    shortDesc: "News feed, action bar",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a location of an item or a a product varient card.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=55%3A379&t=HSsDXGexK0KThPA3-1",
  },
];

const locationPreviews: ComponentPreviews = {
  "location-item-a": <LocationItemA />,
  "location-item-b": <LocationItemB />,
};

export const locationCategory: ComponentCategory = {
  slug: "location",
  title: "Location, Place",
  description:
    "Components designed for representing list of places or locations.",
  seo: "Components designed for representing list of places or locations.",
  components: locationComponents,
  previews: locationPreviews,
};

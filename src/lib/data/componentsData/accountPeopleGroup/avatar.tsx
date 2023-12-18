import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import AvatarAExample from "@/code/components/avatar/avatar-a/example-wrapper";
import AvatarGroupAExample from "@/code/components/avatar/avatar-group-a/example-wrapper";
import AvatarGroupBExample from "@/code/components/avatar/avatar-group-b/example-wrapper";

const avatarComponents: ComponentItem[] = [
  {
    slug: "avatar-a",
    title: "Avatar A",
    shortDesc: "Avatar image",
    previewBgClass: "bg-gradient-gray-light",
    description: "Avatar image, profile picture.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A32&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "avatar-group-a",
    title: "Avatar Group A",
    access: "premium",
    shortDesc: "Group of avatar images",
    previewBgClass: "bg-gradient-gray-light",
    description: "Group of avatar images.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A32&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "avatar-group-b",
    title: "Avatar Group B",
    access: "premium",
    shortDesc: "Group of avatar images",
    previewBgClass: "bg-gradient-gray-light",
    description: "Group of avatar images",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A32&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "avatar-group-c",
    title: "Avatar Group C",
    shortDesc: "Avatar image",
    bgClass: "bg-gradient-gray-light",
    description:
      "This is a short description of this item.",
  },
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A32&t=HSsDXGexK0KThPA3-1", */
];

const avatarPreviews: ComponentPreviews = {
  "avatar-a": <AvatarAExample />,
  "avatar-group-a": <AvatarGroupAExample />,
  "avatar-group-b": <AvatarGroupBExample />,
};

export const avatarCategory: ComponentCategory = {
  slug: "avatar",
  title: "Avatar",
  description: "Avatar and profile picture components.",
  seo: "Explore our curated collection of essential components for avatars and profile pictures.",
  components: avatarComponents,
  previews: avatarPreviews,
};

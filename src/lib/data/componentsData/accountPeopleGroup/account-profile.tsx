import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import AccountProfileAExample from "@/code/components/account-profile/account-profile-a/example-wrapper";
import AccountProfileLiteAExample from "@/code/components/account-profile/account-profile-lite-a/example-wrapper";
import AccountProfileBExample from "@/code/components/account-profile/account-profile-b/example-wrapper";

const accountProfileComponents: ComponentItem[] = [
  {
    slug: "account-profile-lite-a",
    title: "Account Profile Lite A",
    shortDesc: "Account information.",
    previewBgClass: "bg-gradient-gray-light",
    access: "any",
    description:
      "Account information. It can be placed on the header bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A35&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "account-profile-a",
    title: "Account Profile A",
    shortDesc: "Account information and action button.",
    previewBgClass: "bg-gradient-gray-light",
    access: "premium",
    description:
      "Account information and action button. It can be placed on the header bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A35&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "account-profile-b",
    title: "Account Profile B",
    access: "premium",
    shortDesc: "Content of account popover menu.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Content of account popover menu.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A35&t=HSsDXGexK0KThPA3-1"
  },
];

const accountProfilePreviews :ComponentPreviews = {
  "account-profile-a": <AccountProfileAExample/>,
  "account-profile-lite-a": <AccountProfileLiteAExample/>,
  "account-profile-b": <AccountProfileBExample/>,
};

export const accountProfileCategory: ComponentCategory = {
  slug: "account-profile",
  title: "Account Profile",
  description: "User account profile components.",
  seo: "Unleash personalization with our feature-rich avatar components, allowing users to express their unique identity.",
  components: accountProfileComponents,
  previews: accountProfilePreviews,
};
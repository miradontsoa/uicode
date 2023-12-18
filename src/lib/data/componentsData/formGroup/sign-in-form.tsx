import { ComponentCategory, ComponentItem } from "@/types";
import SignInFormAExample from "@/code/components/sign-in-form/sign-in-form-a/example-wrapper";
import SignInFormBExample from "@/code/components/sign-in-form/sign-in-form-b/example-wrapper";

const signInFormComponents: ComponentItem[] = [
  {
    slug: "sign-in-form-a",
    title: "Sign In Form A",
    access: "premium",
    shortDesc: "Component that represents a sign in form.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a sign in form.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1484&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "sign-in-form-b",
    title: "Sign In Form B",
    access: "premium",
    shortDesc: "Component that represents a sign in form.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a sign in form.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1484&t=HSsDXGexK0KThPA3-1",
  },
];

const signInFormPreviews = {
  "sign-in-form-a": <SignInFormAExample />,
  "sign-in-form-b": <SignInFormBExample />,
};

export const signInFormCategory: ComponentCategory = {
  slug: "sign-in-form",
  title: "Sign in form",
  description: "Components designed for representing sign in form",
  seo: "Components designed for representing sign in form",
  components: signInFormComponents,
  previews: signInFormPreviews,
};

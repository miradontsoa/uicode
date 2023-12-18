import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import TeamMemberAExample from "@/code/components/team-people/team-member-a/example-wrapper";
import TeamMemberBExample from "@/code/components/team-people/team-member-b/example-wrapper";
import TeamMemberCExample from "@/code/components/team-people/team-member-c/example-wrapper";

const teamPeopleComponents: ComponentItem[] = [
  {
    slug: "team-member-a",
    title: "Team member A",
    access: "premium",
    shortDesc:
      "A component that represents a person such as an employee, team member, or contact.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A component that represents a person such as an employee, team member, or contact.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=47%3A38&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "team-member-b",
    title: "Team member B",
    access: "premium",
    shortDesc:
      "A component that represents a person such as an employee, team member, or contact.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A component that represents a person such as an employee, team member, or contact.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=47%3A38&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "team-member-c",
    title: "Team member C",
    access: "premium",
    shortDesc:
      "A component that represents a person such as an employee, team member, or contact.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A component that represents a person such as an employee, team member, or contact.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=47%3A38&t=HSsDXGexK0KThPA3-1",
  },
];

const teamPeoplePreviews: ComponentPreviews = {
  "team-member-a": <TeamMemberAExample />,
  "team-member-b": <TeamMemberBExample />,
  "team-member-c": <TeamMemberCExample />,
};

export const teamPeopleCategory: ComponentCategory = {
  slug: "team-people",
  title: "Team, People",
  description:
    "Components designed for representing list of people or team members",
  seo: "Components designed to be used as people list items",
  components: teamPeopleComponents,
  previews: teamPeoplePreviews,
};

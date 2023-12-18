import { CategoryGroup } from "@/types"
import { accountProfileCategory } from "./account-profile"
import { avatarCategory } from "./avatar"
import { teamPeopleCategory } from "./team-people"

const categories = [
    accountProfileCategory,
    avatarCategory,
    teamPeopleCategory,
    /* {
        slug: "team-carousel",
        items: teamCarouselComponents,
        ...teamCarouselInfo
    }, */
    /* {
        slug: "team-hero", // hero, presenting the team member, person profile, ...
        items: teamHeroComponents,
        ...teamHeroInfo
    }, */
]
export const accountPeopleGroup: CategoryGroup = {
    title: "Account & People",
    slug: "account-people",
    description: "Account & People",
    categories,
}
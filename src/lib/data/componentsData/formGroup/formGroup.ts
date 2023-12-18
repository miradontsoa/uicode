import { CategoryGroup } from "@/types"
import { searchFieldCategory } from "./search-field"
import { signInFormCategory } from "./sign-in-form"
import { subscriptionFormCategory } from "./subscription-form"

const categories = [

    searchFieldCategory,
    subscriptionFormCategory,
    signInFormCategory,
    /* {
        slug: "contact-form",
        items: contactFormComponents,
        ...contactFormInfo
    }, */
]
export const formGroup: CategoryGroup = {
    title: "Form",
    slug: "form",
    description: "Form",
    categories,
}
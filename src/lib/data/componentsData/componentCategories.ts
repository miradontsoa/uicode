import { ComponentCategory } from "@/types"
import { categoryGroups } from "./categoryGroups"


/* export const categories = [
    baseCategories,
]
 */


const componentCategories_OLD: ComponentCategory[] = [
    /* {
        slug: "tags",
        title: "Tags",
        description: "Tags, ...",
        items: tagsComponents,
    }, */

    /* {
        slug: "end",
        title: "END END END",
        description: "Use these components as form",
        items: loginFormComponents,
    },
    {
        slug: "finance",
        title: "Finance, Crypto",
        description: "Represent finance, crypto, bank",
        items: financeComponents,
    },
    {
        slug: "login-form",
        title: "Login Form",
        description: "Use these components as form",
        items: loginFormComponents,
    },
    {
        slug: "contact-form",
        title: "Contact Form",
        description: "Use these components as form",
        items: contactFormComponents,
    },
    {
        slug: "clock",
        title: "Clock, Countdown",
        description: "Use these components as poster",
    },
    {
        slug: "event-item",
        title: "Event Item",
        description: "Use these components as card",
        items: gridItemComponents,
    },
    {
        slug: "carousel",
        title: "Carousel",
        description: "Use these components as list",
    },
    {
        slug: "faq",
        title: "FAQ",
        description: "Use these components as list",
    },
    {
        slug: "file-upload",
        title: "File Upload",
        description: "Use these components as list",
    },
    {
        slug: "file-browser",
        title: "File Browser",
        description: "Use these components as list",
    },
    {
        slug: "map-explorer",
        title: "Map Explorer",
        description: "View map, click on a coordinate to view its detail",
    },
    {
        slug: "errors",
        title: "Error, Not Found",
        description: "Use these components as list",
    },
    {
        slug: "loading",
        title: "Loading, Suspense",
        description: "Use these components as list",
    },
    {
        slug: "booking-form",
        title: "Booking Form",
        description: "Use these components as list",
    },
    {
        slug: "menu",
        title: "Menu",
        description: "Desktop App menu, sidebar menu, mobile menu, ... Use these components as poster",
    },
    {
        slug: "weather",
        title: "Weather",
        description: "Use these components as poster",
    },
    {
        slug: "posters",
        title: "Posters",
        description: "Use these components as poster",
    }, */
]

const componentCategories = categoryGroups.flatMap(categoryGroup => {
    return categoryGroup.categories
}) as ComponentCategory[]

export default componentCategories
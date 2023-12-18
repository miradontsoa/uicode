import { CategoryGroup, ComponentCategory } from "@/types"

const categories: ComponentCategory[] = [
    /* {
        slug: "article",
        items: articleComponents,
        ...articleInfo
    }, */
    /* {
        slug: "faq",
        items: faqComponents,
        ...faqInfo
    }, */
    /* {
        slug: "comments",
        items: commentsComponents,
        ...commentsInfo
    }, */
]

export const textGroup: CategoryGroup = {
    title: "Text",
    slug: "text",
    description: "Text",
    categories,
}
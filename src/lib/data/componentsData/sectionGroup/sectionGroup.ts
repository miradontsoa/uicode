import { CategoryGroup } from "@/types"
import { heroEcommerceCategory } from "../ecommerceGroup/hero-ecommerce"
import { heroMarketingCategory } from "./hero-marketing"
import { heroPortfolioCategory } from "./hero-portfolio"

const categories = [
    heroMarketingCategory,
    heroPortfolioCategory,
    heroEcommerceCategory,
]
export const sectionGroup: CategoryGroup = {
    title: "Section",
    slug: "section",
    description: "Page section",
    categories,
}
import { CategoryGroup } from "@/types"
import { pricingCategory } from "./pricing"
import { productItemCategory } from "./product-item"
import { headerEcommerceCategory } from "./header-ecommerce"
import { navigationScreenEcommerceCategory } from "./navigation-screen-ecommerce"
import { heroEcommerceCategory } from "./hero-ecommerce"

const categories = [
    productItemCategory,
    pricingCategory,
    headerEcommerceCategory,
    navigationScreenEcommerceCategory,
    heroEcommerceCategory,
]
export const ecommerceGroup: CategoryGroup = {
    title: "E-commerce",
    slug: "ecommerce",
    description: "E-commerce",
    categories,
}
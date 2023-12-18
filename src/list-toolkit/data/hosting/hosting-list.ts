import { digitalOceanData } from "./digital-ocean/digital-ocean-data"
import { netlifyData } from "./netlify/netlify-data"
import { vercelData } from "./vercel/vercel-data"
const list = [
    vercelData,
    netlifyData,
    digitalOceanData,
]

export const hostingList: ListCategoryType = {
    slug: "hosting",
    title: "Hosting",
    shortDescription: "App hosting provider",
    description:
        "Here are some suggested hosting for react project (either it is based on next js, CRA or customized app). Each of them has their own side.",
    iconName: "hosting",
    list: list,
}


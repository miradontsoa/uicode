import { createReactAppData } from "./create-react-app/create-react-app-data"
import { nextData } from "./next/next-data"
import { remixData } from "./remix/remix-data"

const list = [
    createReactAppData,
    nextData,
    remixData
]

export const frameworkList = {
    slug: "framework",
    title: "Framework",
    description:
        "React Framework",
    list: list,
    iconName: "framework",
}

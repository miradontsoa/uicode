
// export const baseCategoriesSlug = "base"

import { nextData } from "./framework/next/next-data";
import { remixData } from "./framework/remix/remix-data";
import { netlifyData } from "./hosting/netlify/netlify-data";
import { vercelData } from "./hosting/vercel/vercel-data";

export const listFeaturedToolkit: ToolkitType[] = [
  vercelData,
  nextData,
  remixData,
  netlifyData
];


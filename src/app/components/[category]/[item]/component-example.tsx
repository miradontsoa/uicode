"use client";

import componentCategories from "@/lib/data/componentsData/componentCategories";

const demoComponents: any = {};

componentCategories.forEach((componentCategory) => {
  if (componentCategory.previews && componentCategory.slug) {
    demoComponents[componentCategory.slug] = componentCategory.previews;
  }
});

export default function ComponentExample({
  slug,
  categorySlug,
}: {
  slug: string;
  categorySlug: string;
}) {
  if (demoComponents[categorySlug] && demoComponents[categorySlug][slug]) {
    // const DemoComponent = demoComponents[categorySlug][slug];
    const demoComponent = demoComponents[categorySlug][slug];
    return (
      <>
        {demoComponent}
        {/* <DemoComponent /> */}
      </>
    );
  } else {
    return (
      <h6 className="mb-0">
        Preview not found for {slug} in category {categorySlug}
      </h6>
    );
  }
}

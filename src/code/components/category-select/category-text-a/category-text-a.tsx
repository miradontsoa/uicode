import React, { useState } from "react";
import styles from "./category-text-a.module.css";

type CategoryType = {
  slug: string;
  title: React.ReactNode;
};
type Props = {
  className?: string;
  categories?: CategoryType[];
  initialCategorySlug?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "black";
  // Behavior when category is selected
  onSelectCategory?: (categorySlug: string) => void;
};
export default function CategoryTextA({
  categories,
  className,
  rounded = "medium",
  size = "medium",
  initialCategorySlug,
  variant,
  onSelectCategory,
}: Props) {
  // Active slug state
  const [activeSlug, setActiveSlug] = useState<string>(
    initialCategorySlug || (categories ? categories[0]?.slug : "")
  );
  return (
    <>
      {categories && (
        <div
          className={[
            styles["wrapper"],
            styles[`s-${size}`],
            styles[`r-${rounded}`],
            styles[`variant-${variant}`],
            className,
          ].join(" ")}
        >
          {categories.map((category) => {
            return (
              <div key={category.slug}>
                <button
                  type="button"
                  className={[
                    styles["category-item"],
                    activeSlug === category.slug && styles["active"],
                  ].join(" ")}
                  onClick={() => {
                    setActiveSlug(category.slug);
                    onSelectCategory && onSelectCategory(category.slug);
                  }}
                >
                  {category.title}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

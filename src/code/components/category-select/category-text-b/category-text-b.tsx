import classNames from "classnames";
import React, { useState } from "react";
import styles from "./category-text-b.module.css";

type CategoryType = {
  slug: string;
  title: React.ReactNode;
  imageSrc?: string;
};
type Props = {
  className?: string;
  categories?: CategoryType[];
  initialCategorySlug?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "red";
  // Behavior when category is selected
  onSelectCategory?: (categorySlug: string) => void;
};
export default function CategoryTextB({
  className,
  categories,
  initialCategorySlug,
  size = "medium",
  rounded = "full",
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
                  {/* If you use Next.js, replace 'img' with 'Image' element */}
                  {category.imageSrc && (
                    <img
                      className={styles["item-img"]}
                      src={category.imageSrc}
                      alt={`${category.title}`}
                      width={48}
                      height={48}
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <span className={styles["item-text"]}>{category.title}</span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

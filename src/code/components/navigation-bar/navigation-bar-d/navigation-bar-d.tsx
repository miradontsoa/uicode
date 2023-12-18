import React, { useState } from "react";
import styles from "./navigation-bar-d.module.css";

type NavigationItemType = {
  icon?: React.ReactNode;
  title: string;
  slug: string;
  showTitle?: boolean;
  href?: string;
  onClick?: () => void;
};
type Props = {
  className?: string;
  items?: NavigationItemType[];
  defaultActive?: string;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "red";
};
export default function NavigationBarD({
  className,
  items,
  defaultActive,
  rounded,
  variant = "default",
}: Props) {
  const [activeSlug, setActiveSlug] = useState(defaultActive);
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["navs"]}>
        {items?.map((item, index) => {
          const navItemContent = (
            <div
              className={[
                styles["nav-item"],
                activeSlug === item.slug && styles["active"],
              ].join(" ")}
              key={item.slug || `item-${index}`}
            >
              {item.icon && (
                <div className={styles["nav-icon-wrapper"]}>
                  <div className={styles["nav-icon"]}>{item.icon}</div>
                </div>
              )}
            </div>
          );
          return (
            <>
              {item.href ? (
                <a title={item.title} className={styles["nav-link"]}>
                  {navItemContent}
                </a>
              ) : (
                <button
                  type="button"
                  title={item.title}
                  onClick={() => {
                    item.onClick && item.onClick();
                    setActiveSlug(item.slug);
                  }}
                  className={styles["nav-btn"]}
                >
                  {navItemContent}
                </button>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

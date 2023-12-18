import React, { useState } from "react";
import styles from "./sidebar-c.module.css";

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
  logo?: React.ReactNode;
  logoText?: React.ReactNode;
  navigationItems?: NavigationItemType[];
  footerNavigationItems?: NavigationItemType[];
  defaultActive?: string;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "style-a" | "style-b";
};

export default function SidebarC({
  className,
  logo,
  logoText,
  navigationItems,
  footerNavigationItems,
  defaultActive,
  rounded,
  variant = "default",
}: Props) {
  // Active slug
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
      {logo && (
        <div className={styles["header"]}>
          <div className={styles["logo"]}>{logo}</div>
          {logoText && <div className={styles["logo-text"]}>{logoText}</div>}
        </div>
      )}
      <div className={styles["navs"]}>
        {navigationItems?.map((item, index) => {
          const navItemContent = (
            <div
              className={[
                styles["nav-item"],
                activeSlug === item.slug && styles["active"],
              ].join(" ")}
            >
              {item.icon && (
                <div className={styles["nav-icon-wrapper"]}>
                  <div className={styles["nav-icon"]}>{item.icon}</div>
                </div>
              )}
              {item.title && (
                <div
                  className={[
                    styles["nav-title"],
                    item.showTitle && styles["show-title"],
                  ].join(" ")}
                >
                  {item.title}
                </div>
              )}
            </div>
          );
          return (
            <div key={item.slug || `item-${index}`}>
              {item.href ? (
                <a
                  title={item.title}
                  className={styles["nav-link"]}
                  href={item.href}
                >
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
            </div>
          );
        })}
      </div>
      <div className={styles["footer-navs"]}>
        {footerNavigationItems?.map((item, index) => {
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
              {item.title && (
                <div
                  className={[
                    styles["nav-title"],
                    item.showTitle && styles["show-title"],
                  ].join(" ")}
                >
                  {item.title}
                </div>
              )}
            </div>
          );
          return (
            <div key={item.slug || `item-${index}`}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

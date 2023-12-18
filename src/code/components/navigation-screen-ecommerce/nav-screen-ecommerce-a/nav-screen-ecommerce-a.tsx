import React, { useState } from "react";
import styles from "./nav-screen-ecommerce-a.module.css";

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
  headerLeftElement?: React.ReactNode;
  headerRightElement?: React.ReactNode;
  navigationItems?: NavigationItemType[];
  footerNavigationItems?: NavigationItemType[];
  defaultActive?: string;
  navVerticalAlign?: "top" | "center" | "bottom";
  navHorizontalAlign?: "start" | "center" | "end";
  footerLeftElement?: React.ReactNode;
  footerRightElement?: React.ReactNode;
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark";
};

export default function NavScreenEcommerceA({
  className,
  headerLeftElement,
  headerRightElement,
  navigationItems,
  navVerticalAlign,
  navHorizontalAlign,
  defaultActive,
  footerLeftElement,
  footerRightElement,
  variant = "default",
}: Props) {
  const [activeSlug, setActiveSlug] = useState(defaultActive);
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`variant-${variant}`],
        styles[`nav-align-x-${navHorizontalAlign}`],
        styles[`nav-align-y-${navVerticalAlign}`],
        className,
      ].join(" ")}
    >
      <div className={styles["header"]}>
        <div className={styles["h-left"]}>{headerLeftElement}</div>
        <div className={styles["h-left"]}>{headerRightElement}</div>
      </div>
      <nav className={styles["nav"]}>
        <div className={styles["nav-list"]}>
          {navigationItems?.map((item, index) => {
            const navItemContent = (
              <div
                className={[
                  styles["nav-item"],
                  activeSlug === item.slug && styles["active"],
                ].join(" ")}
              >
                {item.icon && (
                  <div className={styles["nav-icon"]}>{item.icon}</div>
                )}
                {item.title && (
                  <div
                    className={[
                      styles["nav-title"],
                      item.showTitle && styles["show-title"],
                    ].join(" ")}
                  >
                    <span className={styles["main"]}>{item.title}</span>
                    <span className={styles["clone"]} aria-hidden>
                      {item.title}
                    </span>
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
      </nav>
      <div className={styles["footer"]}>
        <div className={styles["f-left"]}>{footerLeftElement}</div>
        <div className={styles["f-right"]}>{footerRightElement}</div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./sidebar-b.module.css";

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
  expandIcon?: React.ReactNode;
  isExpandable?: boolean;
  expandedByDefault?: boolean;
  navigationItems?: NavigationItemType[];
  footerNavigationItems?: NavigationItemType[];
  defaultActive?: string;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "style-a" | "style-b";
};

export default function SidebarB({
  className,
  logo,
  logoText,
  expandIcon,
  isExpandable = true,
  expandedByDefault = true,
  navigationItems,
  footerNavigationItems,
  defaultActive,
  rounded,
  variant = "default",
}: Props) {
  // is menu collapsed or not
  const [expanded, setExpanded] = useState(expandedByDefault);
  // Active slug
  const [activeSlug, setActiveSlug] = useState(defaultActive);
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        expanded && styles[`expanded`],
        className,
      ].join(" ")}
    >
      {logo && (
        <div className={styles["header"]}>
          <div className={styles["logo"]}>{logo}</div>
          {logoText && <div className={styles["logo-text"]}>{logoText}</div>}
        </div>
      )}
      {isExpandable && (
        <button
          type="button"
          title="Expand or Collapse"
          className={styles["expand-button"]}
          onClick={() => setExpanded(!expanded)}
        >
          {expandIcon || <ExpandIcon />}
        </button>
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

function ExpandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      viewBox="0 0 18 12"
    >
      <path
        id="expand-icon"
        d="M3,6.75A.75.75,0,0,1,3.75,6h16.5a.75.75,0,0,1,0,1.5H3.75A.75.75,0,0,1,3,6.75ZM3,12a.75.75,0,0,1,.75-.75h16.5a.75.75,0,0,1,0,1.5H3.75A.75.75,0,0,1,3,12Zm0,5.25a.75.75,0,0,1,.75-.75h16.5a.75.75,0,0,1,0,1.5H3.75A.75.75,0,0,1,3,17.25Z"
        transform="translate(-3 -6)"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

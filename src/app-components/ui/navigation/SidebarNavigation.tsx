"use client";

import Icon from "@/app-components/ui/icons/Icon";
import { MenuItem } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import IconMenuA from "../icons/IconMenuA";
import styles from "./SidebarNavigation.module.css";

type Props = {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  // activeSlug?: string; // active slug
  menuItems?: MenuItem[];
  isVisibleOnMobile?: boolean;
  shotTitle?: boolean;
  onSearch?: (textSearch: string) => void;
};
export default function SidebarNavigation({
  className,
  title,
  icon: iconElement,
  isVisibleOnMobile = true,
  shotTitle = true,
  // activeSlug: active,
  menuItems,
  onSearch,
}: Props) {
  const [textSearch, setTextSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = () => {
    onSearch && onSearch(textSearch);
  };
  return (
    <nav className={classNames(styles["sidebar-nav"], className)}>
      {shotTitle && (title || iconElement) && (
        <div className={styles["header"]}>
          {iconElement && <Icon className={styles["icon"]}>{iconElement}</Icon>}
          {title && (
            <h3 className={styles["title"]}>
              <span>{title}</span>
            </h3>
          )}
        </div>
      )}
      {onSearch && (
        <div className={styles["searchbar"]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="input-group-a"></div>
            <input
              type={"text"}
              className="input-a"
              placeholder="Search..."
              value={textSearch}
              onChange={(e) => {
                setTextSearch(e.target.value);
              }}
            />
          </form>
        </div>
      )}
      {isVisibleOnMobile && (
        <div className={styles["menu-controls"]}>
          <button
            title={title}
            // aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            className={styles["menu-button"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={styles["icon"]}>
              <IconMenuA isOpen={isOpen} />
            </span>
            {/* <span className="text">All {title}</span> */}
            <span className={styles["text"]}>{title}</span>
          </button>
        </div>
      )}
      <div className={classNames(styles["nav-menu"], isOpen && styles["open"])}>
        {menuItems?.map((menuItem, index) => {
          if (menuItem.appearance === "separator") {
            return (
              <div
                className={classNames(styles["nav-separator"])}
                key={`${menuItem.title}${menuItem.slug}-${index}`}
              >
                {menuItem.title}
              </div>
            );
          }
          return (
            <div
              className={classNames(
                styles["nav-item"],
                menuItem.active && styles["active"]
              )}
              key={`${menuItem.title}${menuItem.slug}-${index}`}
              onClick={() => setIsOpen(false)}
            >
              <Link className={styles["nav-link"]} href={menuItem.href || "#"}>
                {menuItem.title}
              </Link>
            </div>
          );
        })}
        {/* <div className="nav-item active">
          <Link className="nav-link" href={"./buttons"}>
            Buttons
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" href={"./cards"}>
            Cards
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" href={"./form"}>
            Form
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" href={"./product-cards"}>
            Product cards
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

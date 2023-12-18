"use client";
import { AppContext } from "@/contexts/AppContext";
import { MenuItem } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext, useState } from "react";
import Logo from "../image/Logo";
import IconMenuA from "../icons/IconMenuA";
import styles from "./NavbarTop.module.css";
import ButtonApp from "../buttons/ButtonApp";

type Props = {
  menuItems: MenuItem[];
};
export default function NavbarTop({ menuItems }: Props) {
  const segment = useSelectedLayoutSegment();
  // const segment = "unknwon" ;
  const [isOpen, setIsOpen] = useState(false);
  const appContext = useContext(AppContext);
  const userAccountType = appContext?.user?.accountType;
  return (
    <div className={styles["navbar-top"]}>
      <div className={styles["navbar-logo"]}>
        {/* <Link title="Go to home page" href="https://uicode.mirado.work"> */}
        <Link title="Go to home page" href="/">
          <Logo />
        </Link>
      </div>
      <div
        className={classNames(
          styles["nav-main-menu"],
          isOpen && styles["open"]
        )}
      >
        <div className={styles["navbar-nav"]}>
          {menuItems.map((menuItem) => {
            if (menuItem.appearance === "separator") {
              return (
                <div
                  key={menuItem.title || menuItem.slug}
                  className={styles["nav-separator"]}
                />
              );
            }
            const itemContent = (
              <div
                className={classNames(
                  styles["nav-item"],
                  menuItem.mobileColor &&
                    styles[`item-color-m-${menuItem.mobileColor}`],
                  menuItem.mobileHalf && styles["m-half"],
                  menuItem.visibleForDevice === "mobile-only" &&
                    styles["mobile-only"],
                  menuItem.visibleForDevice === "desktop-only" &&
                    styles["desktop-only"]
                )}
                key={menuItem.title || menuItem.slug}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
              >
                {menuItem.element}
                {!menuItem.element && (
                  <Link
                    className={classNames(
                      styles["nav-link"],
                      // menuItem.active && "active"
                      segment === menuItem.slug && styles["active"],
                      !segment && menuItem.slug === "about" && styles["active"]
                    )}
                    aria-current="page"
                    href={menuItem.href || ""}
                    scroll={true}
                  >
                    {menuItem.mobileTitle && (
                      <span className={styles["mobile-text"]}>
                        {menuItem.mobileTitle}
                      </span>
                    )}
                    <span className={styles["text"]}>{menuItem.title}</span>
                    <span className={styles["icon"]}>{menuItem.icon}</span>
                  </Link>
                )}
              </div>
            );
            return itemContent;
          })}
        </div>
      </div>

      <div className={styles["menu-controls"]}>
        <button
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className={classNames(
            styles["menu-button"],
            appContext.user && styles["icon-only"]
          )}
          // onClick={() => toggleMenu()}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={classNames(styles["text"])}>Menu</span>
          <span className={styles["icon"]}>
            {/* <IconMenu className="icon" /> */}
            <IconMenuA className={styles["icon"]} isOpen={isOpen} />
          </span>
        </button>
      </div>
    </div>
  );
}

"use client";
import { AppContext } from "@/contexts/AppContext";
import { MenuItem } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import { useContext, useState } from "react";
import AccountTopMenu from "../account/AccountTopMenu.jsx";
import IconMenuA from "../icons/IconMenuA.jsx";
import Logo from "../image/Logo.jsx";

import styles from "./NavbarMobile.module.css";

type Props = {
  menuItems: MenuItem[];
};
export default function NavbarMobile({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const appContext = useContext(AppContext);
  const userAccountType = appContext?.user?.accountType;
  /* const mainContext = React.useContext(MainContext);
  const toggleMenu = () => {
    mainContext.setMenuVisible(!mainContext.menuVisible);
  };
  const closeMenu = () => {
    mainContext.setMenuVisible(false);
  }; */
  return (
    <div className={styles["navbar-mobile"]}>
      <Link
        className={styles["navbar-logo"]}
        title="Go to home page"
        // href="https://uicode.mirado.work"
        href="/"
      >
        <Logo />
      </Link>
      <div
        className={classNames(
          styles["mobile-nav"],
          userAccountType && styles["connected"]
        )}
      >
        <div className={styles["navbar-account"]}>
          <AccountTopMenu />
        </div>
        <div className={classNames(styles["menu-controls"])}>
          <button
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={styles["menu-button"]}
            // onClick={() => toggleMenu()}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={styles["text"]}>Menu</span>
            <span className={styles["icon"]}>
              {/* <IconMenu className="icon" /> */}
              <IconMenuA className={styles["icon"]} isOpen={isOpen} />
            </span>
          </button>
        </div>
        <div
          className={classNames(
            styles["mobile-nav-menu"],
            isOpen && styles["open"]
          )}
        >
          <div
            className={classNames(
              styles["navbar-nav"],
              styles["nav-main-menu"]
            )}
          >
            {menuItems
              .filter((menuItem) => {
                /* show item depending on user account type */
                if (
                  !menuItem.visibleForAccount ||
                  menuItem.visibleForAccount === "any"
                ) {
                  return true;
                } else if (
                  menuItem.visibleForAccount === "registered" &&
                  (userAccountType === "registered" ||
                    userAccountType === "premium")
                ) {
                  return true;
                } else if (
                  menuItem.visibleForAccount === "premium" &&
                  userAccountType === "premium"
                ) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((menuItem) => {
                return (
                  <div className={styles["nav-item"]} key={menuItem.title}>
                    {menuItem.type === "local" ? (
                      <a
                        className={styles["nav-link"]}
                        aria-current="page"
                        href={menuItem.href}
                        // onClick={(closeMenu)}
                        onClick={() => setIsOpen(false)}
                      >
                        {menuItem.title}
                      </a>
                    ) : (
                      <Link
                        className={styles["nav-link"]}
                        aria-current="page"
                        href={menuItem.href || "#"}
                        onClick={() => setIsOpen(false)}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

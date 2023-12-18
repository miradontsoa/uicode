"use client";
import { AppContext } from "@/contexts/AppContext";
import { MenuItem } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext } from "react";
import AccountTopMenu from "../account/AccountTopMenu.jsx";
import ButtonSolid from "../buttons/ButtonSolid.jsx";
import Logo from "../image/Logo.jsx";

type Props = {
  menuItems: MenuItem[];
};
export default function NavbarLargeScreen({ menuItems }: Props) {
  const segment = useSelectedLayoutSegment();
  const appContext = useContext(AppContext);
  const userAccountType = appContext?.user?.accountType;
  return (
    <div className="navbar-large-screen">
      <div className="navbar-logo">
        {/* <Link title="Go to home page" href="https://uicode.mirado.work"> */}
        <Link title="Go to home page" href="/">
          <Logo />
        </Link>
      </div>
      <div className="navbar-nav nav-main-menu">
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
            const itemContent = (
              <div className="nav-item" key={menuItem.title}>
                {menuItem.appearance === "cta" ? (
                  <Link
                    className={classNames("link-no-style")}
                    aria-current="page"
                    href={menuItem.href || ""}
                    scroll={true}
                  >
                    <ButtonSolid>{menuItem.title}</ButtonSolid>
                  </Link>
                ) : (
                  <Link
                    className={classNames(
                      "nav-link",
                      // menuItem.active && "active"
                      segment === menuItem.slug && "active",
                      !segment && menuItem.slug === "about" && "active"
                    )}
                    aria-current="page"
                    href={menuItem.href || ""}
                    scroll={true}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </div>
            );
            return itemContent;
          })}
      </div>
      <div className="navbar-account">
        <AccountTopMenu />
      </div>
    </div>
  );
}

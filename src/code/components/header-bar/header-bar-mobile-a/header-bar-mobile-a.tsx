import { Bars2Icon, BellIcon, Cog6ToothIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "./header-bar-mobile-a.module.css";

type Props = {
  className?: string;
};

export default function HeaderBarMobileA({
  className
}: Props) {
   
  return (
    <div
      className={clsx(
        styles["wrapper"],
        className
      )}
    >
      {/* First Navigation Bar */}
      <nav className={clsx(styles["navbar"], styles["navbar-1"])}>
        <div className={styles["navbar-content"]}>
          <div className={clsx(styles["nav-start"])}>
            <div className={styles["logo"]}>
              <img
                className={styles["logo-img"]}
                alt="Logo"
                src="/placeholder/logo-1.svg"
                width={100}
                height={40}
              />
            </div>
          </div> 

          {/* Action buttons at end */}
          <div className={clsx(styles["nav-end"])}>
            <div
              className={clsx(styles["nav-list"], styles["nav-list-actions"])}
            > 

              <div className={clsx(styles["item"])}>
                <button
                  title="Notifications"
                  type="button"
                  className={styles["item-btn"]}
                >
                  <BellIcon className={styles["item-icon"]} />
                  <div className={styles["item-badge"]}>2</div>
                </button>
              </div>
              <div className={clsx(styles["item"])}>
                <a title="settings" href="#" className={styles["item-btn"]}>
                  <Cog6ToothIcon className={styles["item-icon"]} />
                </a>
              </div>
              <div className={clsx(styles["item"])}>
                <button
                  title="Menu button"
                  type="button"
                  className={styles["item-btn"]}
                >
                  <Bars2Icon className={styles["item-icon"]} /> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
 
    </div>
  );
}
 
import {
  BellIcon,
  InboxIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import AccountProfileLiteA from "../../account-profile/account-profile-lite-a/account-profile-lite-a";
import styles from "./header-bar-b.module.css";

type Props = {
  className?: string;
};

export default function HeaderBarB({ className }: Props) {
  return (
    <div className={clsx(styles["wrapper"], className)}>
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

          {/* Navigation at center */}
          <div className={clsx(styles["nav-middle"], styles["center"])}>
            <ul className={clsx(styles["nav-list"], styles["nav-list-1"])}>
              <li className={clsx(styles["item"])}>
                <SearchField />
              </li>
              <li className={clsx(styles["item"])}>
                <button type="button" className={clsx(styles["item-btn"])}>
                  Dashboard
                </button>
              </li>
              <li className={clsx(styles["item"])}>
                <button type="button" className={clsx(styles["item-btn"])}>
                  Customers
                </button>
              </li> 
            </ul>
          </div>

          {/* Action buttons and search form at end */}
          <div className={clsx(styles["nav-end"])}>
            <div
              className={clsx(styles["nav-list"], styles["nav-list-actions"])}
            >
              <div className={clsx(styles["item"])}>
                <a title="Settings" href="#" className={styles["item-btn"]}>
                  <InboxIcon className={styles["item-icon"]} />
                </a>
              </div>
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
                <AccountProfileLiteA
                  imageSrc="/placeholder/img-person-square-2.jpg"
                  title={"John Wilson"}
                  description={"Chief Editor"} 
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

/**
 * This is a sample SearchField, which is based on code of SearchFieldLightA
 */
function SearchField() {
  return (
    <form
      className={clsx(styles["search-field-wrapper"])}
      onSubmit={(e) => {
        // ...sample behavior when form is submitted
        e.preventDefault();
      }}
    >
      <input
        type={"text"}
        className={styles["search-input"]}
        placeholder="Search..."
      />
      <button type="submit" title="Search" className={styles["search-btn"]}>
        <MagnifyingGlassIcon className={styles["search-btn-icon"]} />
      </button>
    </form>
  );
}



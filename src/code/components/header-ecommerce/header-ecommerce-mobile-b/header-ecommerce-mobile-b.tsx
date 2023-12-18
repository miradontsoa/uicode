import {
  Bars2Icon,
  GiftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "./header-ecommerce-mobile-b.module.css";

type Props = {
  className?: string;
};

export default function HeaderEcommerceMobileB({ className }: Props) {
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

          {/* Action buttons at end */}
          <div className={clsx(styles["nav-end"])}>
            <div
              className={clsx(styles["nav-list"], styles["nav-list-actions"])}
            >
              <div className={clsx(styles["item"])}>
                <a title="Search" href="#" className={styles["item-btn"]}>
                  <span>Search</span>
                  <MagnifyingGlassIcon className={styles["item-icon"]} />
                </a>
              </div>
              <div className={clsx(styles["item"])}>
                <button
                  title="Cart"
                  type="button"
                  className={styles["item-btn"]}
                >
                  <ShoppingBagIcon className={styles["item-icon"]} />
                  <div className={styles["item-badge"]}>2</div>
                </button>
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

      {/* Horizontal scrollable Navigation Bar */}
      <nav className={clsx(styles["navbar"], styles["navbar-scrollable"])}>
        <div className={styles["navbar-content"]}>
          <div className={clsx(styles["nav-scroll-container"])}>
            <div
              className={clsx(styles["nav-list"], styles["nav-list-scroll"])}
            >
              <div className={clsx(styles["item"])}>
                <a
                  title="Collections"
                  href="#"
                  className={clsx(styles["item-btn"], styles["active"])}
                >
                  <HeartIcon className={styles["item-icon"]} />
                  <span className={styles["text"]}>Collections</span>
                </a>
              </div>
              <div className={clsx(styles["item"])}>
                <a title="Women" href="#" className={styles["item-btn"]}>
                  <GiftIcon className={styles["item-icon"]} />
                  <span className={styles["text"]}>For Women</span>
                </a>
              </div>
              <div className={clsx(styles["item"])}>
                <a title="Women" href="#" className={styles["item-btn"]}>
                  <GiftIcon className={styles["item-icon"]} />
                  <span className={styles["text"]}>Accessories</span>
                </a>
              </div>
              <div className={clsx(styles["item"])}>
                <a title="Trending" href="#" className={styles["item-btn"]}>
                  <HeartIcon className={styles["item-icon"]} />
                  <span className={styles["text"]}>Trending</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

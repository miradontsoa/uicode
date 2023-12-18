import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./header-ecommerce-a.module.css";

type Props = {
  className?: string;
};

export default function HeaderEcommerceA({
  className
}: Props) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  // Close submenu when click outside of it or button
  const subNavRef = useRef(null as any);
  useEffect(() => {
    function handleClickOutside(event: any) {
      // Hide subnav if sclick is not inside the subnav and is not in a trigger button
      if (
        !event.target?.getAttribute("data-subnav-trigger") &&
        subNavRef.current &&
        !subNavRef.current.contains(event.target)
      ) {
        setActiveSubmenu(null);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subNavRef]);

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
            <ul className={clsx(styles["nav-list"], styles["nav-list-1"])}>
              <li className={clsx(styles["item"])}>
                <a className={styles["item-btn"]} href="#">
                  Lang
                </a>
              </li>
              <li className={clsx(styles["item"])}>
                <a className={styles["item-btn"]} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={clsx(styles["nav-end"])}>
            <ul className={clsx(styles["nav-list"], styles["nav-list-1"])}>
              <li className={clsx(styles["item"])}>
                <a className={styles["item-btn"]} href="#">
                  Blog
                </a>
              </li>
              <li className={clsx(styles["item"])}>
                <a className={styles["item-btn"]} href="#">
                  Newsletter
                </a>
              </li>
              <li className={clsx(styles["item"])}>
                <a className={styles["item-btn"]} href="#">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Second Navigation Bar. */}
      <nav className={clsx(styles["navbar"], styles["navbar-2"])}>
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
              {/* Optional logo text */}
              {/* <div className={styles["logo-txt"]}>Logo</div> */}
            </div>
          </div>

          {/* Navigation at center */}
          <div className={clsx(styles["nav-middle"], styles["center"])}>
            <ul className={clsx(styles["nav-list"], styles["nav-list-2"])}>
              <li className={clsx(styles["item"])}>
                {/* A nav button should have an attribute data-subnav-trigger */}
                <button
                  type="button"
                  data-subnav-trigger
                  className={clsx(
                    styles["item-btn"],
                    activeSubmenu === "collections" && styles["item-active"]
                  )}
                  onClick={() => setActiveSubmenu("collections")}
                >
                  Collections
                </button>
              </li>
              <li className={clsx(styles["item"])}>
                <button
                  type="button"
                  data-subnav-trigger
                  className={clsx(
                    styles["item-btn"],
                    activeSubmenu === "women" && styles["item-active"]
                  )}
                  onClick={() => setActiveSubmenu("women")}
                >
                  Women
                </button>
              </li>
              <li className={clsx(styles["item"])}>
                <a className={styles["item-link"]} href="#accessories">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Action buttons and search form at end */}
          <div className={clsx(styles["nav-end"])}>
            <div
              className={clsx(styles["nav-list"], styles["nav-list-actions"])}
            >
              <div className={clsx(styles["item"])}>
                <SearchField />
              </div>

              <div className={clsx(styles["item"])}>
                <a title="Favorite" href="#" className={styles["item-btn"]}>
                  <HeartIcon className={styles["item-icon"]} />
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
            </div>
          </div>
        </div>
      </nav>

      {/* Sub Navigation . */}
      <nav
        ref={subNavRef}
        className={[
          styles["subnav-menu"],
          activeSubmenu && styles["visible"],
        ].join(" ")}
      >
        <div className={styles["subnav-content"]}>
          {activeSubmenu === "collections" && (
            <div className={styles["submenu-wrapper"]}>
              <div className={styles["s-cols-menu"]}>
                <div>
                  <h5 className={styles["s-nav-title"]}>Featured</h5>
                  <ul className={styles["s-nav-list"]}>
                    <li>
                      <a href="#link">Trending</a>
                    </li>
                    <li>
                      <a href="#link">New items</a>
                    </li>
                    <li>
                      <a href="#link">Summer</a>
                    </li>
                    <li>
                      <a href="#link">Winter</a>
                    </li>
                    <li>
                      <a href="#link">Spring 2020</a>
                    </li>
                    <li>
                      <a href="#link">Fall 2030</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className={styles["s-nav-title"]}>Summer</h5>
                  <ul className={styles["s-nav-list"]}>
                    <li>
                      <a href="#link">Shoes</a>
                    </li>
                    <li>
                      <a href="#link">Winter Dress</a>
                    </li>
                    <li>
                      <a href="#link">Spring Clothing</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className={styles["s-nav-title"]}>More</h5>
                  <ul className={styles["s-nav-list"]}>
                    <li>
                      <a href="#link">Summer sale</a>
                    </li>
                    <li>
                      <a href="#link">New arrival sale</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className={styles["s-desc"]}>
                    <img
                      src="/placeholder/img-fashion-landscape-1.jpg"
                      alt="image"
                    />
                    <p >
                      This is a sample submenu content which uses CSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeSubmenu === "women" && (
            <div className={styles["submenu-wrapper"]}>
              <div className={"grid grid-cols-4 gap-4"}>
                <div>
                  <h5 className={"text-sm uppercase font-semibold mb-4"}>
                    Clothing
                  </h5>
                  <ul className={"list-none p-0 m-0 leading-7"}>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Skirts
                      </a>
                    </li>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Pants
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className={"text-sm uppercase font-semibold mb-4"}>
                    Shoes
                  </h5>
                  <ul className={"list-none p-0 m-0 leading-7"}>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Ballerinas
                      </a>
                    </li>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Sandals
                      </a>
                    </li>
                    <li>
                      <a className={"text-current opacity-75"} href="#link">
                        Heels
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm opacity-75">
                    This sample submenu content uses Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          )}
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

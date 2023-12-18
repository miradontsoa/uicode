##### Package dependencies

It uses Heroicons for icons and clsx to manage class list, so you may need to install them first

```shell
npm install clsx
```

```shell
npm install @heroicons/react
```

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.

##### Sub Menu
A submenu trigger button have the following content. It should have the `data-subnav-trigger` attribute, and an `onClick` event which will select the submenu.
```tsx
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
```

All submenu are placed inside div with classname `styles["subnav-content"]`, and a submenu may have the following content.

```tsx
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
...
</div>
```

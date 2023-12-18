import styles from "./breadcrumbs-b.module.css";
type ItemType = {
  icon?: React.ReactNode;
  slug?: string;
  title?: React.ReactNode;
  href?: string;
  iconOnly?: boolean;
  active?: boolean;
};
type Props = {
  items: ItemType[];
  className?: string;
  separator?: "bar" | "arrow" | "circle";
  separatorElement?: React.ReactNode;
  highlightLastItem?: boolean;
  size?: "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue" | "red" | "blue-outline";
};
export default function BreadcrumbsB({
  className,
  items,
  separator = "arrow",
  separatorElement,
  highlightLastItem = true,
  size,
  variant = "default",
}: Props) {
  return (
    <>
      <div
        className={[
          styles["wrapper"],
          styles[`s-${size}`],
          styles[`variant-${variant}`],
          highlightLastItem && styles[`highlight-last-item`],
          className,
        ].join(" ")}
      >
        {items && (
          <ul className={styles["list"]}>
            {items.map((item, index) => {
              const itemContent = (
                <span
                  className={[
                    styles["item-wrapper"],
                    item.href && styles["has-link"],
                  ].join(" ")}
                >
                  {item?.icon && (
                    <span className={styles["item-icon"]}>{item.icon}</span>
                  )}
                  {!item.iconOnly && (
                    <span className={styles["item-content"]}>{item.title}</span>
                  )}
                </span>
              );

              return (
                <li
                  key={item?.slug || `${item?.title?.toString()}-${index}`}
                  className={[
                    styles["list-item"],
                    item.active && styles["active"],
                  ].join(" ")}
                >
                  {/* Item */}
                  {item.href ? (
                    /* You may need to replace this with a Link if you use Next or Remix */
                    <a className={styles["link"]} href={item.href}>
                      {itemContent}
                    </a>
                  ) : (
                    <span>{itemContent}</span>
                  )}

                  {/* Separator */}
                  {index < items?.length - 1 && (
                    <span className={styles["item-separator"]}>
                      {separatorElement}
                      {!separatorElement && (
                        <>{separator === "arrow" && <SeparatorArrow />}</>
                      )}
                      {!separatorElement && (
                        <>{separator === "bar" && <SeparatorBar />}</>
                      )}
                      {!separatorElement && (
                        <>{separator === "circle" && <SeparatorCircle />}</>
                      )}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

function SeparatorArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      style={{
        width: "1em",
        height: "1em",
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8535 7.64646C11.0488 7.84173 11.0488 8.15826 10.8535 8.35353L5.85355 13.3535C5.65829 13.5488 5.34171 13.5488 5.14645 13.3535C4.95118 13.1583 4.95118 12.8417 5.14645 12.6465L9.79286 8L5.14645 3.35355C4.95118 3.15829 4.95118 2.8417 5.14645 2.64644C5.34171 2.45119 5.65829 2.45119 5.85355 2.64644L10.8535 7.64646Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SeparatorBar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      style={{
        width: "1em",
        height: "1em",
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10.7393"
        y="2"
        width="1"
        height="12.9454"
        rx="0.5"
        transform="rotate(26.3175 10.7393 2)"
        fill="currentColor"
      />
    </svg>
  );
}

function SeparatorCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      style={{
        width: "1em",
        height: "1em",
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="4" fill="currentColor" />
    </svg>
  );
}

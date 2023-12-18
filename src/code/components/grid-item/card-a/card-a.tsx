import styles from "./card-a.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  viewIcon?: React.ReactNode;
  actionIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark";
  // Behavior when action button is clicked
  onClickAction?: () => void;
};

export default function CardA({
  className,
  imageSrc,
  title,
  description,
  href,
  viewIcon,
  actionIcon,
  rounded = "medium",
  variant,
  onClickAction,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["image-wrapper"]}>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        <a href={href}>
          {/* If you use Next.js, replace 'img' with 'Image' element */}
          <img
            className={[styles["image"], styles["square"]].join(" ")}
            src={imageSrc}
            alt={title?.valueOf()?.toString()}
            width={360}
            height={360}
            loading="lazy"
          />
        </a>
        {actionIcon && (
          <div className={styles["image-controls"]}>
            <button
              type="button"
              className={styles["action-icon"]}
              onClick={() => {
                // add on click behavior here eg:
                onClickAction && onClickAction();
              }}
            >
              {actionIcon}
            </button>
          </div>
        )}
      </div>
      <div className={styles["body"]}>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        <a href={href} className={styles["body-link"]}>
          <div className={styles["body-content"]}>
            <div className={styles["b-left"]}>
              <h3 className={styles["title"]}>{title}</h3>
              {description && (
                <div className={styles["desc"]}>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    <>{description}</>
                  )}
                </div>
              )}
            </div>
            <div className={styles["b-right"]}>
              {viewIcon && (
                <div className={styles["view-icon"]}>{viewIcon}</div>
              )}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

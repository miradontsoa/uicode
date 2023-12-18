import styles from "./location-item-a.module.css";

type DetailType = {
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};
type Props = {
  className?: string;
  imageSrc?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  details?: DetailType[];
  href?: string;
  actionIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  imageRounded?: "default" | "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "simple";
  // Behavior when action button is clicked
  onClickAction?: () => void;
};

export default function LocationItemA({
  className,
  imageSrc,
  title,
  description,
  href,
  actionIcon,
  rounded = "medium",
  imageRounded = "default",
  details,
  variant,
  onClickAction,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`img-r-${imageRounded}`],
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
      </div>
      <div className={styles["body-wrapper"]}>
        {/* You may replace the a tag with a Link if you use NextJS, or simply remove it if you do not want link  */}
        <a href={href} className={styles["body-link"]}>
          <div className={styles["body-content"]}>
            <div className={styles["b-text"]}>
              <div className={styles["text-content"]}>
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
              <div className={styles["details"]}>
                {details?.map((detail, index) => (
                  <button
                    key={detail.title || `action-${index}`}
                    type="button"
                    className={styles["detail-button"]}
                    title={detail.title}
                    onClick={() => {
                      // add on click behavior here eg:
                      detail.onClick && detail.onClick();
                    }}
                  >
                    {detail.icon && (
                      <span className={styles["icon"]}>{detail.icon}</span>
                    )}
                    {detail.title && (
                      <span className={styles["text"]}>{detail.title}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles["b-action"]}>
              {actionIcon && (
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
              )}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

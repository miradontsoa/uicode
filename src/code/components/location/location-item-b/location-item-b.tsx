import styles from "./location-item-b.module.css";

type ActionType = {
  icon?: React.ReactElement;
  title?: string;
  showTitle?: boolean;
  onClick?: () => void;
};
type Props = {
  className?: string;
  imageSrc?: string;
  title: string;
  description?: React.ReactNode;
  href?: string;
  ratingIcon?: React.ReactNode;
  ratingScore?: string;
  ratingComment?: string;
  actionIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  imageRounded?: "default" | "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "simple";
  footerLeftActions?: ActionType[];
  footerRightActions?: ActionType[];
  onClickAction?: () => void;
};

export default function LocationItemB({
  className,
  imageSrc,
  title,
  description,
  href,
  ratingIcon,
  ratingScore,
  ratingComment,
  actionIcon,
  rounded = "medium",
  imageRounded = "default",
  variant,
  footerLeftActions,
  footerRightActions,
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
      <div className={styles["body"]}>
        {/* You may replace the a tag with a Link if you use NextJS, or simply remove it if you do not want link  */}
        <a href={href} className={styles["body-link"]}>
          <div className={styles["body-wrapper"]}>
            <div className={styles["image-wrapper"]}>
              {/* You may need to replace the a tag with a Link if you use Next.js  */}
              {/* If you use Next.js, replace 'img' with 'Image' element */}
              <img
                className={[styles["image"], styles["square"]].join(" ")}
                src={imageSrc}
                alt={title?.valueOf()?.toString()}
                width={360}
                height={360}
                loading="lazy"
              />
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

            <div className={styles["body-content"]}>
              <div>
                <h3 className={styles["title"]}>{title}</h3>
                {description && (
                  <div className={styles["desc"]}>
                    <p>{description}</p>
                  </div>
                )}
                {ratingScore && (
                  <div className={styles["rating"]}>
                    <div className={styles["r-score"]}>
                      <span className={styles["r-icon"]}>{ratingIcon}</span>
                      <span className={styles["r-text"]}>{ratingScore}</span>
                    </div>
                    <div className={styles["r-comment"]}>{ratingComment}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className={styles["footer"]}>
        <div className={styles["f-left"]}>
          {/* You may replace this button with button-a, button-b, ... */}
          <div className={styles["f-details"]}>
            {footerLeftActions?.map((action, index) => (
              <DetailButton
                key={action.title || `action-${index}`}
                action={action}
              />
            ))}
          </div>
        </div>
        <div className={styles["f-right"]}>
          <div className={styles["f-details"]}>
            {footerRightActions?.map((action, index) => (
              <DetailButton
                key={action.title || `action-${index}`}
                action={action}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailButton({ action }: { action: ActionType }) {
  return (
    <button
      type="button"
      className={styles["detail-button"]}
      title={action.title}
      onClick={() => {
        // add on click behavior here eg:
        action.onClick && action.onClick();
      }}
    >
      {action.icon && <span className={styles["icon"]}>{action.icon}</span>}
      {action.title && <span className={styles["text"]}>{action.title}</span>}
    </button>
  );
}

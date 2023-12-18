import styles from "./list-item-c.module.css";

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
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  actionIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  imageRounded?: "default" | "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "simple";
  // Behavior when action button is clicked
  footerLeftActions?: ActionType[];
  footerRightActions?: ActionType[];
  onClickAction?: () => void;
};

export default function ListItemC({
  className,
  imageSrc,
  title,
  subTitle,
  description,
  href,
  actionIcon,
  rounded = "small",
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
            </div>
            <div className={styles["body-header"]}>
              <div className={styles["bh-text"]}>
                <div className={styles["text-content"]}>
                  <h3 className={styles["title"]}>{title}</h3>
                  {subTitle && (
                    <div className={styles["desc"]}>
                      {typeof subTitle === "string" ? (
                        <p>{subTitle}</p>
                      ) : (
                        <>{subTitle}</>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles["bh-action"]}>
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

            <div className={styles["body-content"]}>{description}</div>
          </div>
        </a>
      </div>

      <div className={styles["footer"]}>
        <div className={styles["f-left"]}>
          {/* You may replace this button with button-a, button-b, ... */}
          <div className={styles["f-action"]}>
            {footerLeftActions?.map((action, index) => (
              <ActionButton
                key={action.title || `action-${index}`}
                action={action}
              />
            ))}
          </div>
        </div>
        <div className={styles["f-right"]}>
          <div className={styles["f-action"]}>
            {footerRightActions?.map((action, index) => (
              <ActionButton
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

function ActionButton({ action }: { action: ActionType }) {
  return (
    <button
      type="button"
      className={styles["action-button"]}
      title={action.title}
      onClick={() => {
        // add on click behavior here eg:
        action.onClick && action.onClick();
      }}
    >
      {action.icon && <span className={styles["icon"]}>{action.icon}</span>}
      {action.showTitle && (
        <span className={styles["text"]}>{action.title}</span>
      )}
    </button>
  );
}

import styles from "./account-profile-b.module.css";

type ActionType = {
  icon?: React.ReactElement;
  title?: string;
  showTitle?: boolean;
  onClick?: () => void;
};
type Props = {
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  title: string;
  description?: React.ReactNode;
  actionTopIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  imageRounded?: "default" | "none" | "small" | "medium" | "large" | "full";
  footerLeftActions?: ActionType[];
  footerRightActions?: ActionType[];
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "simple";
  onClickActionTop?: () => void;
};

export default function AccountProfileB({
  className,
  children,
  imageSrc,
  title,
  description,
  actionTopIcon,
  rounded = "small",
  imageRounded = "default",
  variant,
  footerLeftActions,
  footerRightActions,
  onClickActionTop,
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
      <div className={styles["top-action"]}>
        {actionTopIcon && (
          <button
            type="button"
            className={styles["action-top-btn"]}
            onClick={() => {
              // add on click behavior here eg:
              onClickActionTop && onClickActionTop();
            }}
          >
            <div className={styles["action-top-btn-icon"]}>{actionTopIcon}</div>
          </button>
        )}
      </div>
      <div className={styles["body"]}>
        {/* You may replace the a tag with a Link if you use NextJS, or simply remove it if you do not want link  */}
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
            </div>
          </div>

          {children && <div className={styles["body-content"]}>{children}</div>}
        </div>
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
                iconPosition={"right"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  action,
  iconPosition = "left",
}: {
  action: ActionType;
  iconPosition?: "left" | "right";
}) {
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
      {iconPosition === "left" && action.icon && (
        <span className={styles["icon"]}>{action.icon}</span>
      )}
      {action.showTitle && (
        <span className={styles["text"]}>{action.title}</span>
      )}
      {iconPosition === "right" && action.icon && (
        <span className={styles["icon"]}>{action.icon}</span>
      )}
    </button>
  );
}

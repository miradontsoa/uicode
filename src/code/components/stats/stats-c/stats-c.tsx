import styles from "./stats-c.module.css";

type ActionType = {
  icon?: React.ReactElement;
  title?: string;
  showTitle?: boolean;
  onClick?: () => void;
};
type Props = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  footerLeftElement?: React.ReactNode;
  footerRightElement?: React.ReactNode;
  imageSrc?: string;
  aspect?: "auto" | "square";
  horizontalAlign?: "left" | "start" | "center" | "right" | "end";
  rounded?: "none" | "small" | "medium" | "large";
  variant?: "default" | "gradient-orange" | "gradient-blue";
  actions?: ActionType[];
};

export default function StatsC({
  className,
  children,
  imageSrc,
  icon,
  footerLeftElement,
  footerRightElement,
  actions,
  rounded = "medium",
  aspect = "auto",
  horizontalAlign = "start",
  variant,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`ar-${aspect}`],
        styles[`r-${rounded}`],
        styles[`ha-${horizontalAlign}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["content"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        {imageSrc && (
          <img
            className={[styles["image"]].join(" ")}
            src={imageSrc}
            alt={"Background"}
            width={360}
            height={360}
            loading="lazy"
          />
        )}
        {actions && (
          <div className={styles["actions"]}>
            {actions.map((action, index) => {
              return (
                <button
                  key={`action-${index}`}
                  type="button"
                  className={styles["action-button"]}
                  title={action.title}
                  onClick={() => {
                    action.onClick && action.onClick();
                  }}
                >
                  {action.showTitle && (
                    <div className={styles["text"]}>{action.title}</div>
                  )}
                  <div className={styles["icon"]}>{action.icon}</div>
                </button>
              );
            })}
          </div>
        )}
        {/* You can replace this content */}
        {icon && <div className={styles["icon-wrapper"]}>{icon}</div>}
        {children && (
          <div className={styles["child-content"]}>
            <div className={styles["cc-wrapper"]}>{children}</div>
          </div>
        )}
      </div>
      {(footerLeftElement || footerRightElement) && (
        <div className={styles["footer"]}>
          <div className={styles["f-left"]}>{footerLeftElement}</div>
          <div className={styles["f-right"]}>{footerRightElement}</div>
        </div>
      )}
    </div>
  );
}

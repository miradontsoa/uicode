import styles from "./stats-b.module.css";

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
  aspect?: "auto" | "square";
  horizontalAlign?: "left" | "start" | "center" | "right" | "end";
  verticalAlign?: "top" | "center" | "bottom";
  rounded?: "none" | "small" | "medium" | "large";
  variant?: "default" | "gradient-orange" | "gradient-blue";
  actions?: ActionType[];
};

export default function StatsB({
  children,
  className,
  imageSrc,
  aspect = "auto",
  horizontalAlign = "center",
  verticalAlign = "center",
  rounded = "medium",
  variant,
  actions,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`ar-${aspect}`],
        styles[`r-${rounded}`],
        styles[`va-${verticalAlign}`],
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
        {children && <div className={styles["child-content"]}>{children}</div>}
      </div>
    </div>
  );
}

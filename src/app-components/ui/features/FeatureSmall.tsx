import classNames from "classnames";
import styles from "./FeatureSmall.module.css";
export default function FeatureSmall({
  title,
  className,
  description,
  icon,
}: {
  title?: string;
  className?: string;
  description?: string;
  icon?: React.ReactNode;
  color: "primary" | "primary-light";
}) {
  return (
    <div className={classNames(className, styles["wrapper"])}>
      {icon && <div className={styles["icon-wrapper"]}>{icon}</div>}
      {(description || title) && (
        <div className={styles["text-wrapper"]}>
          {title && <h5 className={styles["title"]}>{title}</h5>}
          {description && <p className={styles["desc"]}>{description}</p>}
        </div>
      )}
    </div>
  );
}

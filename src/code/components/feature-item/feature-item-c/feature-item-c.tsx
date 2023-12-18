import React from "react";
import styles from "./feature-item-c.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  href?: string;
  rounded?: "none" | "small" | "medium" | "large";
  shadow?: "none" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "red" | "simple" | "blue" | "blue-white" | "blue-simple";
};

export default function FeatureItemC({
  className,
  children,
  title,
  description,
  icon,
  secondaryIcon,
  href,
  rounded = "small",
  shadow = "none",
  variant = "default",
}: Props) {
  const content = (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        (shadow = "none"),
        className,
      ].join(" ")}
    >
      <div className={styles["content"]}>
        {secondaryIcon && (
          <div className={styles["icon-secondary"]}>{secondaryIcon}</div>
        )}
        <div className={styles["header"]}>
          {icon && <div className={styles["icon"]}>{icon}</div>}
          {title && <h4 className={styles["title"]}>{title}</h4>}
        </div>
        {description && <p className={styles["desc"]}>{description}</p>}
        {children && <div className={styles["desc"]}>{children}</div>}
      </div>
    </div>
  );
  if (href) {
    // Replace the "a" element with "Link" if you use Next.js, react-router ...
    return (
      <a href={href} className={styles["link"]}>
        {content}
      </a>
    );
  } else {
    return <>{content}</>;
  }
}

import React from "react";
import styles from "./FeatureItemLanding.module.css";

type Props = {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  href?: string;
  shadow?: "none" | "medium";
  rounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "red" | "simple" | "blue" | "blue-white" | "blue-simple";
};

export default function FeatureItemLanding({
  className,
  title,
  description,
  children,
  icon,
  secondaryIcon,
  href,
  shadow = "none",
  rounded = "small",
  variant = "default",
}: Props) {
  const content = (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["content"]}>
        {icon && <div className={styles["icon"]}>{icon}</div>}
        {secondaryIcon && (
          <div className={styles["icon-secondary"]}>{secondaryIcon}</div>
        )}
        {title && <h4 className={styles["title"]}>{title}</h4>}
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

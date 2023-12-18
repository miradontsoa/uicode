import React from "react";
import styles from "./feature-item-e.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  aspect?: "default" | "square" | "portrait" | "landscape";
  imageSrc?: string;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  href?: string;
  align?: "top" | "center" | "bottom";
  rounded?: "none" | "small" | "medium" | "large";
  shadow?: "none" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue" | "white" | "yellow-dark";
};

export default function FeatureItemE({
  className,
  children,
  title,
  subTitle,
  description,
  aspect,
  imageSrc,
  icon,
  secondaryIcon,
  href,
  align = "top",
  rounded = "medium",
  shadow = "none",
  variant = "default",
}: Props) {
  const content = (
    <div
      className={[
        styles["wrapper"],
        styles[`align-${align}`],
        styles[`r-${rounded}`],
        styles[`ar-${aspect}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["content-wrapper"]}>
        {icon && <div className={styles["icon"]}>{icon}</div>}
        {secondaryIcon && (
          <div className={styles["icon-secondary"]}>{secondaryIcon}</div>
        )}
        {subTitle && <h6 className={styles["sub-title"]}>{subTitle}</h6>}
        {title && <h4 className={styles["title"]}>{title}</h4>}
        {description && <p className={styles["desc"]}>{description}</p>}
        {children && <div className={styles["desc"]}>{children}</div>}
      </div>

      {imageSrc && (
        <div className={styles["image-wrapper"]}>
          {/* If you use Next.js, replace 'img' with 'Image' element */}
          <img
            className={[styles["image"]].join(" ")}
            src={imageSrc}
            alt={title?.toString()}
            width={360}
            height={360}
          />
        </div>
      )}
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

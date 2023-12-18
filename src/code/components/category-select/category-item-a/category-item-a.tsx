import Image from "next/image";
import React from "react";
import styles from "./category-item-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "primary";
};
export default function CategoryItemA({
  className,
  children,
  imageSrc,
  size = "medium",
  rounded = "full",
  variant,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`s-${size}`],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <span className={[styles["category-item"]].join(" ")}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        {imageSrc && (
          <Image
            className={styles["item-img"]}
            src={imageSrc}
            alt={`${children}`}
            width={48}
            height={48}
            decoding="async"
            loading="lazy"
          />
        )}
        <span className={styles["item-text"]}>{children}</span>
      </span>
    </div>
  );
}

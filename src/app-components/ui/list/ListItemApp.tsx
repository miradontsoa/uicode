import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import styles from "./ListItemApp.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  title: string;
  imageElement?: React.ReactNode;
  urlText?: string;
  viewText?: string;
  imageSrc?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "primary";
};
export default function ListItemApp({
  className,
  children,
  title,
  imageElement,
  urlText,
  viewText,
  imageSrc,
  size = "medium",
  rounded,
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
      <div className={[styles["category-item"]].join(" ")}>
        {imageElement && <div className="">{imageElement}</div>}
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
        <h4 className={styles["title"]}>{title}</h4>
        <div className={styles["content"]}>{children}</div>
        {urlText && <div className={styles["url-text"]}>{urlText}</div>}
        {viewText && (
          <div className={styles["view"]}>
            <span className={styles["text"]}>{viewText}</span>
            <ArrowLongRightIcon className={styles["icon"]} />
          </div>
        )}
      </div>
    </div>
  );
}

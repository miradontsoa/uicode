import React from "react";
import styles from "./image-frame-a.module.css";

type Props = {
  className?: string;
  title?: React.ReactNode;
  alt: string;
  src?: string;
  aspect?: "default" | "square" | "portrait" | "landscape";
  imageAspect?: "square" | "portrait" | "landscape";
  shadow?: "none" | "medium";
  rounded?: "none" | "small" | "medium" | "large";
  imageRounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "red";
};

export default function ImageFrameA({
  className,
  title,
  alt,
  src,
  aspect = "square",
  imageAspect = "square",
  shadow = "medium",
  rounded = "medium",
  imageRounded = "medium",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`ar-${aspect}`],
        styles[`r-${rounded}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <figure className={styles["image-wrapper"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[styles["image"], styles[`img-r-${imageRounded}`],  styles[`img-ar-${imageAspect}`]].join(" ")}
          src={src}
          alt={alt}
          width={360}
          height={360}
        />

        {title && <legend className={styles["legend"]}>{title}</legend>}
      </figure>
    </div>
  );
}

import React from "react";
import styles from "./image-frame-c.module.css";
type Props = {
  className?: string;
  alt: string;
  imgMainSrc: string;
  imgBottomSrc?: string;
  rounded?: "none" | "small" | "medium" | "large";
};

export default function ImageFrameC({
  className,
  alt,
  imgMainSrc,
  imgBottomSrc,
  rounded = "small",
}: Props) {
  return (
    <div className={[styles["wrapper"], className].join(" ")}>
      <figure className={styles["image-wrapper"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[styles["image-main"], styles[`r-${rounded}`]].join(" ")}
          src={imgMainSrc}
          alt={alt}
          width={360}
          height={360}
        />
        <img
          className={[styles["image-bottom"], styles[`r-${rounded}`]].join(" ")}
          src={imgBottomSrc}
          alt={alt}
          width={360}
          height={360}
        />
      </figure>
    </div>
  );
}

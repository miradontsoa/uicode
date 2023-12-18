import React from "react";
import styles from "./image-frame-d.module.css";

type Props = {
  className?: string;
  alt: string;
  imgMainSrc: string;
  imgBackSrc?: string;
  horizontalAlign?: "start" | "center" | "end";
  rounded?: "none" | "small" | "medium" | "large";
};

export default function ImageFrameD({
  className,
  alt,
  imgMainSrc,
  imgBackSrc,
  horizontalAlign,
  rounded = "small",
}: Props) {
  return (
    <div
      className={[
        className,
        styles["wrapper"],
        styles[`ha-${horizontalAlign}`],
      ].join(" ")}
    >
      <figure className={styles["image-wrapper"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[styles["image-back"], styles[`r-${rounded}`]].join(" ")}
          src={imgBackSrc}
          alt={alt}
          width={360}
          height={360}
        />
        <img
          className={[styles["image-main"], styles[`r-${rounded}`]].join(" ")}
          src={imgMainSrc}
          alt={alt}
          width={360}
          height={360}
        />
      </figure>
    </div>
  );
}

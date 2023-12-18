import React from "react";
import styles from "./image-frame-b.module.css";
type Props = {
  className?: string;
  alt: string;
  imgMainSrc: string;
  imgTopSrc?: string;
  imgBottomSrc?: string;
  imgTopAspect?: "default" | "square" | "portrait" | "landscape";
  imgBottomAspect?: "default" | "square" | "portrait" | "landscape";
  rounded?: "none" | "small" | "medium" | "large";
};

export default function ImageFrameB({
  className,
  alt,
  imgMainSrc,
  imgTopSrc,
  imgBottomSrc,
  imgTopAspect = "square",
  imgBottomAspect = "square",
  rounded = "small",
}: Props) {
  return (
    <div className={[styles["wrapper"], className].join(" ")}>
      <figure className={styles["image-wrapper"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[
            styles["image-top"],
            styles[`r-${rounded}`],
            styles[`img-top-ar-${imgTopAspect}`],
          ].join(" ")}
          src={imgTopSrc}
          alt={alt}
          width={360}
          height={360}
        />
        <img
          className={[styles["image"], styles[`r-${rounded}`]].join(" ")}
          src={imgMainSrc}
          alt={alt}
          width={360}
          height={360}
        />
        <img
          className={[
            styles["image-bottom"],
            styles[`r-${rounded}`],
            styles[`img-bottom-ar-${imgBottomAspect}`],
          ].join(" ")}
          src={imgBottomSrc}
          alt={alt}
          width={360}
          height={360}
        />
      </figure>
    </div>
  );
}

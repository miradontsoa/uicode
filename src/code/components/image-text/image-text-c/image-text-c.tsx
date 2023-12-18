import styles from "./image-text-c.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  imageClassName?: string;
  alt?: string;
  textContent?: React.ReactNode;
  textAlignHorizontal?: "start" | "center" | "end";
  textAlignVertical?: "start" | "center" | "end";
  rounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark";
};

export default function ImageTextC({
  className,
  imageSrc,
  imageClassName,
  alt,
  textContent,
  textAlignHorizontal,
  textAlignVertical,
  rounded,
  variant,
}: Props) {
  return (
    <div
      className={[
        className,
        styles["wrapper"],
        rounded && styles[`r-${rounded}`],
        variant && styles[`variant-${variant}`],
        textAlignHorizontal && styles[`th-${textAlignHorizontal}`],
        textAlignVertical && styles[`tv-${textAlignVertical}`],
      ].join(" ")}
    >
      <div className={styles["image-wrapper"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[
            styles["image"],
            imageClassName,
          ].join(" ")}
          src={imageSrc}
          alt={alt || "Image"}
          width={360}
          height={360}
          loading="lazy"
        />
      </div>
      {textContent && (
        <div className={styles["text-content"]}>
          <div className={styles["text-wrapper"]}>
            {typeof textContent === "string" ? (
              <p>{textContent}</p>
            ) : (
              <>{textContent}</>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

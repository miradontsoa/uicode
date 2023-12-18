import styles from "./image-text-b.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  imageClassName?: string;
  imageSize?: "small" | "medium" | "large";
  alt?: string;
  textContent?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark";
};

export default function ImageTextB({
  className,
  imageClassName,
  imageSrc,
  imageSize,
  alt,
  textContent,
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
      ].join(" ")}
    >
      <div className={styles["image-wrapper"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[
            styles["image"],
            imageSize && styles[`is-${imageSize}`],
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

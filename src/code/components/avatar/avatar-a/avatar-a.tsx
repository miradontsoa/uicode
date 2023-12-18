import styles from "./avatar-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  title?: string;
  size?: "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "full";
  rounded?: "none" | "small" | "medium" | "large" | "full";

  // Border
  borderSize?: "none" | "small" | "medium" | "large";
  borderPosition?: "inside" | "outside" | "aureole";
  borderColor?: "white" | "black" | "green" | "gradient";

  // Label
  labelColor?: "none" | "green" | "red";
  labelElement?: React.ReactNode;
  labelPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  labelSize?: "x-small" | "small" | "medium" | "large";
  // Customized color
  variant?: "default" | "blue" | "orange";
};

export default function AvatarA({
  className,
  children,
  imageSrc,
  title,
  size = "medium",
  rounded = "full",
  borderColor,
  borderPosition,
  borderSize = "none",
  labelColor,
  labelElement,
  labelSize = "medium",
  labelPosition = "bottom-right",
  variant,
}: Props) {
  return (
    <div
      className={[
        className,
        styles["wrapper"],
        styles[`s-${size}`],
        styles[`r-${rounded}`],
        styles[`c-${variant}`],
        styles[`bdc-${borderColor}`],
        styles[`bdp-${borderPosition}`],
        styles[`bds-${borderSize}`],
      ].join(" ")}
      title={title}
    >
      <div className={styles["avatar"]}>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        {imageSrc && (
          <img
            className={styles["image"]}
            src={imageSrc}
            alt={title?.valueOf()?.toString()}
            width={360}
            height={360}
            loading="lazy"
          />
        )}
        {/* Optional content  */}
        {children && <div className={styles["content"]}>{children}</div>}
        {(labelColor || labelElement) && (
          <div
            className={[
              styles["label"],
              styles[`lc-${labelColor}`],
              styles[`lp-${labelPosition}`],
              styles[`ls-${labelSize}`],
            ].join(" ")}
          >
            {labelElement}
          </div>
        )}
      </div>
    </div>
  );
}

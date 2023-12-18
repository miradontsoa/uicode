import styles from "./card-f.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  title?: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  viewText?: string;
  viewIcon?: React.ReactNode;
  type?: "link" | "button";
  rounded?: "none" | "small" | "medium" | "large";
  aspect?: "auto" | "square";
  horizontalAlign?: "left" | "start" | "center" | "right" | "end";
  verticalAlign?: "top" | "center" | "bottom";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "gradient-orange";
  onClick?: () => void;
};

export default function CardF({
  children,
  className,
  imageSrc,
  title,
  href,
  icon,
  viewText,
  viewIcon,
  type = "link",
  rounded = "medium",
  aspect = "auto",
  horizontalAlign = "center",
  verticalAlign = "center",
  variant,
  onClick,
}: Props) {
  const contentProps = { title, imageSrc, icon, viewText, viewIcon };
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`ar-${aspect}`],
        styles[`r-${rounded}`],
        styles[`va-${verticalAlign}`],
        styles[`ha-${horizontalAlign}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      {(href || type === "link") && (
        <a href={href} className={styles["link-type"]}>
          <Content {...contentProps}>{children}</Content>
        </a>
      )}
      {type === "button" && (
        <button
          type="button"
          className={styles["button-type"]}
          onClick={onClick}
        >
          <Content {...contentProps}>{children}</Content>
        </button>
      )}
    </div>
  );
}

function Content({ children, title, imageSrc, icon, viewText, viewIcon }: Props) {
  return (
    <>
      <div className={styles["content"]}>
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        {imageSrc && (
          <img
            className={[styles["image"]].join(" ")}
            src={imageSrc}
            alt={title?.valueOf()?.toString()}
            width={360}
            height={360}
            loading="lazy"
          />
        )}
        {/* You can replace this content */}
        {icon && <div className={styles["icon-wrapper"]}>{icon}</div>}
        {title && <h4 className={styles["title"]}>{title}</h4>}
        {children && <div className={styles["desc"]}>{children}</div>}
      </div>
      {(viewText || viewIcon) && (
        <footer className={styles["footer"]}>
          {/* You may need to replace the a tag with a Link if you use Next.js  */}
          <div className={styles["footer-view"]}>
            {viewText && (
              <span className={styles["view-text"]}>{viewText}</span>
            )}
            {viewIcon && (
              <span className={styles["view-icon"]}>{viewIcon}</span>
            )}
          </div>
        </footer>
      )}
    </>
  );
}

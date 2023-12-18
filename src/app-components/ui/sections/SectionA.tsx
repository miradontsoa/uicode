import classNames from "classnames";
import Image from "next/image";
import styles from "./SectionA.module.css";
type Props = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  bgImage?: string;
  paddingTop?: "none" | "small" | "medium" | "large";
  paddingBottom?: "none" | "small" | "medium" | "large";
  contentWidth?: "auto" | "full" | "small" | "medium" | "large";
  withXPageMargin?: boolean;
};
export default function SectionA({
  className,
  children,
  bgColor,
  bgImage,
  paddingTop = "small",
  paddingBottom = "small",
  contentWidth,
  withXPageMargin = false,
}: Props) {
  return (
    <div
      className={classNames(
        className,
        styles.section,
        styles[`pt-${paddingTop}`],
        styles[`pb-${paddingBottom}`],
        withXPageMargin && styles["with-x-page-margin"]
      )}
    >
      {bgColor && (
        <div
          className={styles.bg}
          style={{
            backgroundColor: bgColor || "transparent",
          }}
        ></div>
      )}
      {bgImage && (
        <div
          className={classNames(styles.bg, styles.bgImage)}
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
      )}

      <div className={classNames(styles.content, styles[`width-${contentWidth}`])}>
        {children}
      </div>
    </div>
  );
}

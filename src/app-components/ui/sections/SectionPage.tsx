import classNames from "classnames";
import styles from "./SectionPage.module.css";

type Props = {
  className?: string,
  children?: React.ReactNode;
  width?: "small" | "medium" | "large" | "full";
  marginTop?: "none" | "small" | "medium" | "large";
  marginBottom?: "none" | "small" | "medium" | "large";
  align?: "start" | "center" | "end"
};
const SectionPage = ({
  className,
  children,
  width,
  marginBottom = "none",
  marginTop = "none",
  align = "start"
}: Props) => {
  return (
    <section
      className={classNames(
        className,
        "section section-page",
        styles[`mt-${marginTop}`],
        styles[`mb-${marginBottom}`],
      )}
    >
      <div className={classNames(styles.body,
        styles[`align-${align}`],)}>
        <div
          className={classNames("section-content", styles.content, styles[`width-${width}`])}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default SectionPage;

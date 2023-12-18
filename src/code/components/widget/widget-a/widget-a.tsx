import styles from "./widget-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  headerIconElement?: React.ReactNode;
  headerStartElement?: React.ReactNode;
  headerCenterElement?: React.ReactNode;
  headerEndElement?: React.ReactNode;
  headerElement?: React.ReactNode;
  footerStartElement?: React.ReactNode;
  footerCenterElement?: React.ReactNode;
  footerEndElement?: React.ReactNode;
  footerElement?: React.ReactNode;
  size?: "small" | "medium" | "large";
  padding?: "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark";
};
export default function WidgetA({
  className,
  children,
  headerElement,
  headerIconElement,
  headerStartElement,
  headerCenterElement,
  headerEndElement,
  footerElement,
  footerStartElement,
  footerCenterElement,
  footerEndElement,
  padding,
  size,
  variant = "default",
}: Props) {
  return (
    <>
      <div
        className={[
          styles["wrapper"],
          styles[`s-${size}`],
          styles[`p-${padding}`],
          styles[`variant-${variant}`],
          className,
        ].join(" ")}
      >
        {(headerElement ||
          headerIconElement ||
          headerStartElement ||
          headerCenterElement ||
          headerEndElement) && (
          <header className={styles["header"]}>
            <div className={styles["header-sce"]}>
              {(headerStartElement || headerIconElement) && (
                <div className={styles["header-start"]}>
                  {headerIconElement && (
                    <div className={styles["header-icon"]}>
                      {headerIconElement}
                    </div>
                  )}
                  <div className={styles["header-start-content"]}>
                    {headerStartElement}
                  </div>
                </div>
              )}
              {headerCenterElement && (
                <div className={styles["header-center"]}>
                  <div>{headerCenterElement}</div>
                </div>
              )}
              {headerEndElement && (
                <div className={styles["header-end"]}>
                  <div>{headerEndElement}</div>
                </div>
              )}
            </div>
            {headerElement && (
              <div className={styles["header-elem"]}>{headerElement}</div>
            )}
          </header>
        )}
        <div className={styles["body"]}>{children}</div>
        {(footerElement ||
          footerStartElement ||
          footerCenterElement ||
          footerEndElement) && (
          <footer className={styles["footer"]}>
            <div className={styles["footer-sce"]}>
              {footerStartElement && (
                <div className={styles["footer-start"]}>
                  {footerStartElement}
                </div>
              )}
              {footerCenterElement && (
                <div className={styles["footer-center"]}>
                  {footerCenterElement}
                </div>
              )}
              {footerEndElement && (
                <div className={styles["footer-end"]}>{footerEndElement}</div>
              )}
            </div>
            {footerElement && (
              <div className={styles["footer-elem"]}>{footerElement}</div>
            )}
          </footer>
        )}
      </div>
    </>
  );
}

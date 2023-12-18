import React from "react";
import styles from "./pricing-b.module.css";

type FeatureType = {
  title: string;
  unavailable?: boolean;
};
type Props = {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  callToActionText?: string;
  callToActionElement?: React.ReactNode;
  price?: React.ReactNode;
  priceUnit?: React.ReactNode;
  features?: FeatureType[];
  availableIcon?: React.ReactNode;
  unavailableIcon?: React.ReactNode;
  href?: string;
  rounded?: "none" | "small" | "medium" | "large";
  shadow?: "none" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "red";
};

export default function PricingB({
  className,
  title,
  description,
  callToActionText,
  callToActionElement,
  price,
  priceUnit,
  features = [],
  availableIcon = "+",
  unavailableIcon = "-",
  href,
  shadow = "none",
  rounded = "small",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <header className={styles["header"]}>
        {/* Title and price */}
        {title && <h4 className={styles["title"]}>{title}</h4>}
        {<hr className={styles["title-separator"]} />}
        <div className={styles["price-group"]}>
          {price && <div className={styles["price"]}>{price}</div>}
          {priceUnit && <div className={styles["price-unit"]}>{priceUnit}</div>}
        </div>
      </header>
      <div className={styles["content"]}>
        {description && <p className={styles["desc"]}>{description}</p>}

        {/* Feature list */}
        {features && (
          <ul className={styles["features"]}>
            {features.map((feature) => (
              <li
                key={feature.title}
                className={[
                  styles["feature-item"],
                  feature.unavailable && styles["feature-unavailable"],
                ].join(" ")}
              >
                <span className={styles["feature-icon"]}>
                  {feature.unavailable ? unavailableIcon : availableIcon}
                </span>
                <span className={styles["feature-text"]}>{feature.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className={styles["footer"]}>
        {/* Call to action */}
        {/* Set the callToActionElement for a specific CTA component or 
        use a simple callToActionText with the href props */}
        {callToActionElement}
        {/* Replace the "a" element with "Link" if you use Next.js */}
        {callToActionText && (
          <a href={href} className={styles["btn-cta"]}>
            {callToActionText}
          </a>
        )}
      </footer>
    </div>
  );
}

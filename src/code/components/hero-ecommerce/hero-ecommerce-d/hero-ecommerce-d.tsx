import clsx from "clsx";
import styles from "./hero-ecommerce-d.module.css";

type Props = {
  className?: string;
  variant?: "default" | "style-a" ;
};

export default function HeroEcommerceD({
  className,
  variant = "default",
}: Props) {
  return (
    <section
      className={clsx(
        className,
        styles["section"],
        styles[`variant-${variant}`]
      )}
    >
      <div className={styles["bg-image"]}>
        <picture>
          <source
            media="(min-width:480px)"
            srcSet="/placeholder/img-ecommerce-3-large.jpg"
          />
          <img
            className={styles["image"]}
            src="/placeholder/img-ecommerce-3-mobile.jpg"
            alt="Background Image"
          />
        </picture>
        {/* You can also use a video tag */}
        {/* <video className={styles["image"]} src="..." /> */}
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={clsx(styles["content"])}>
          {/* Sample content */}
          <div className={styles["part-1"]}>
            <h4 className={styles["heading-2"]}>Summer sale</h4>
            <h2 className={styles["heading-1"]}>Save up to 50%</h2>
          </div>
          <div className={styles["part-2"]}>
            <div className={styles["desc"]}>
              <p>
                This is our ecommerce shop page, get 50% off if you buy now.
              </p>
            </div>
            <div className={styles["btns-group"]}>
              {/* Sample button based on ButtonA */}
              <a href="#" className={styles["button"]}>
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

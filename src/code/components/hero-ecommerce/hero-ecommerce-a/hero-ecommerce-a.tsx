import clsx from "clsx";
import styles from "./hero-ecommerce-a.module.css";

type Props = {
  className?: string;
  variant?: "default" | "style-a" | "style-b";
};

export default function HeroEcommerceA({
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
      <div className= {styles["content-wrapper"]}>
        <div className={clsx(styles["content"])}>
          {/* Sample content */}
          <h4 className={styles["heading-2"]}>Summer sale</h4>
          <h2 className={styles["heading-1"]}>New Summer Collection</h2>
          <div className={styles["desc"]}>
            <p>
              This is our awesome ecommerce shop page, get 50% off if you buy
              one product now. Follow us on social media to get more promotions.
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
    </section>
  );
}

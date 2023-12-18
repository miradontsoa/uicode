import clsx from "clsx";
import styles from "./hero-portfolio-a.module.css";

type Props = {
  className?: string;
  variant?: "default" | "style-a" | "style-b";
};

export default function HeroPortfolioA({
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
            srcSet="/placeholder/img-landing-1-large.jpg"
          />
          <img
            className={styles["image"]}
            src="/placeholder/img-landing-1-mobile.jpg"
            alt="Background Image"
          />
        </picture>
        {/* You can also use a video tag */}
        {/* <video className={styles["image"]} src="..." /> */}
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={clsx(styles["content"])}>
          {/* Sample content */}
          <h4 className={styles["heading-2"]}>This summer</h4>
          <h2 className={styles["heading-1"]}>Mountain Camp</h2>
          <div className={styles["desc"]}>
            <p>
              This is our awesome landing page, It is supposed to invite user to
              nuy our product or to explore our website. Follow us on social
              media.
            </p>
          </div>
          <div className={styles["btns-group"]}>
            {/* Sample button based on ButtonA */}
            <a href="#" className={styles["button"]}>
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

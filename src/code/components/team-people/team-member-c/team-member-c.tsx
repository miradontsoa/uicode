import styles from "./team-member-c.module.css";

type SocialType = {
  icon?: React.ReactNode;
  title?: string;
  href?: string;
  showTitle?: boolean;
};

type Props = {
  className?: string;
  imageSrc?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  verticalAlign?: "start" | "center"  ;
  socialsAlign?: "left" | "start" | "center" | "right" | "end";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  variant?: "default" | "dark" | "card";
  footerSocials?: SocialType[];
};

export default function TeamMemberC({
  className,
  imageSrc,
  title,
  description,
  href,
  footerSocials,
  verticalAlign = "start",
  socialsAlign = "start",
  rounded = "small",
  variant,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`va-${verticalAlign}`],
        styles[`sa-${socialsAlign}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["image-wrapper"]}>
        {href ? (
          /* You may need to replace the a tag with a Link if you use Next.js  */
          <a href={href}>
            {/* If you use Next.js, replace 'img' with 'Image' element */}
            <img
              className={[styles["image"], styles["square"]].join(" ")}
              src={imageSrc}
              alt={title?.valueOf()?.toString()}
              width={360}
              height={360}
              loading="lazy"
            />
          </a>
        ) : (
          /* If you use Next.js, replace 'img' with 'Image' element */
          <img
            className={[styles["image"], styles["square"]].join(" ")}
            src={imageSrc}
            alt={title?.valueOf()?.toString()}
            width={360}
            height={360}
            loading="lazy"
          />
        )}
      </div>
      <div className={styles["body"]}>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        <div className={styles["body-content"]}>
          <a href={href} className={styles["body-link"]}>
            <div>
              <h3 className={styles["title"]}>{title}</h3>
              {description && (
                <div className={styles["desc"]}>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    <>{description}</>
                  )}
                </div>
              )}
            </div>
          </a>
          {footerSocials && (
            <div className={styles["socials"]}>
              {footerSocials.map((social, index) => {
                return (
                  <a
                    key={`social-${index}`}
                    className={styles["social-link"]}
                    title={social.title}
                    href={social.href}
                  >
                    {social.showTitle && (
                      <div className={styles["text"]}>{social.title}</div>
                    )}
                    <div className={styles["icon"]}>{social.icon}</div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

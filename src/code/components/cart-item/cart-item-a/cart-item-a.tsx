import styles from "./product-card-a.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  title: string;
  category?:  React.ReactNode;
  label?:  React.ReactNode;
  price?:  React.ReactNode;
  description?: React.ReactNode;
  align?: "start" | "center";
  variant?: "default" | "fashion" | "tech";
};

export default function ProductCardA({
  className,
  imageSrc,
  title,
  category,
  description,
  label,
  price,
  align = "center",
  variant,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["media"]}>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={styles["image"]}
          src={imageSrc}
          alt={title}
          width={360}
          height={480}
        />
        {label && (
          <div className={styles["label-wrapper"]}>
            <div className={styles["label"]}>{label}</div>
          </div>
        )}
      </div>
      <div className={[styles["content"], styles[`align-${align}`]].join(" ")}>
        {/* You may replace the a tag with a Link if you use NextJS  */}
        <h3 className={styles["title"]}>{title}</h3>
        {category && <h6 className={styles["category"]}>{category}</h6>}
        {description && <div className={styles["desc"]}>{description}</div>}
        {price && <div className={styles["price"]}>{price}</div>}
      </div>
    </div>
  );
}

import { useState } from "react";
import styles from "./product-item-e.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  title: string;
  category?: string;
  price?: string;
  description?: string;
  tags?: string[];
  categorySelectElement?: React.ReactNode;
  href?: string;
  buyButtonText?: string;
  isFavorite?: boolean;
  iconFavoriteOn?: React.ReactNode;
  iconFavoriteOff?: React.ReactNode;
  variant?: "default" | "dark";
  onClickBuy?: () => void;
  onClickFavorite?: () => void;
};

export default function ProductItemE({
  className,
  imageSrc,
  title,
  category,
  price,
  description,
  tags,
  categorySelectElement,
  href,
  buyButtonText,
  isFavorite,
  iconFavoriteOn,
  iconFavoriteOff,
  variant,
  onClickBuy,
  onClickFavorite,
}: Props) {
  return (
    <div
      className={[styles["wrapper"], styles[`variant-${variant}`], className].join(
        " "
      )}
    >
      <div className={styles["image-wrapper"]}>
        <div className={styles["image-header"]}>
          {tags && (
            <div className={styles["tags"]}>
              {tags?.map((tag) => (
                <span key={tag} className={styles["tag"]}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        <a className={styles["link"]} href={href}>
          {/* If you use Next.js, replace 'img' with 'Image' element */}
          <img
            className={[styles["image"], styles["square"]].join(" ")}
            src={imageSrc}
            alt={title}
            width={360}
            height={360}
          />
        </a>
        <div className={styles["image-controls"]}>
          <button
            type="button"
            className={styles["icon-button"]}
            onClick={() => {
              // add on click behavior here eg:
              onClickFavorite && onClickFavorite();
            }}
          >
            {isFavorite
              ? iconFavoriteOn || <IconHeartFill />
              : iconFavoriteOff || <IconHeart />}
          </button>
        </div>
      </div>
      <div className={styles["body"]}>
        {/* You may replace the a tag with a Link if you use NextJS  */}
        <a href={href} className={styles["link"]}>
          {category && <h6 className={styles["category"]}>{category}</h6>}
          <h3 className={styles["title"]}>{title}</h3>
          {description && <p className={styles["desc"]}>{description}</p>}
        </a>
        {categorySelectElement}
      </div>
      <div className={styles["footer"]}>
        <div className={styles["f-left"]}>
          {price && <div className={styles["price"]}>{price}</div>}
        </div>
        <div className={styles["f-right"]}>
          <div className={styles["btns-group"]}>
            {buyButtonText && (
              <button
                type="button"
                className={styles["btn-text"]}
                onClick={() => {
                  // add on click behavior here eg:
                  onClickBuy && onClickBuy();
                }}
              >
                {buyButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// IconHeart component
function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
      style={{
        width: "1em",
        height: "1em",
      }}
    >
      <path
        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

// IconHeartFill component
function IconHeartFill({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
      style={{
        width: "1em",
        height: "1em",
      }}
    >
      <path
        fill="currentColor"
        d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"
      />
    </svg>
  );
}

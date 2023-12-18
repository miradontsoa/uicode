import { useState } from "react";
import styles from "./product-item-f.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  title: string;
  category?: React.ReactNode;
  price?: string;
  rating?: string;
  description?: string;
  tags?: string[];
  href?: string;
  buyButtonText?: string;
  isFavorite?: boolean;
  iconFavoriteOn?: React.ReactNode;
  iconFavoriteOff?: React.ReactNode;
  withItemCount?: boolean;
  iconAdd?: React.ReactNode;
  iconMinus?: React.ReactNode;
  iconRemove?: React.ReactNode;
  variant?: "default" | "simple";
  onClickBuy?: () => void;
  onClickFavorite?: () => void;
};

export default function ProductItemF({
  className,
  imageSrc,
  title,
  category,
  price,
  description,
  tags,
  href,
  isFavorite,
  rating,
  iconFavoriteOn,
  iconFavoriteOff,
  withItemCount = true,
  buyButtonText,
  iconAdd = "+",
  iconMinus = "-",
  iconRemove = "x",
  variant,
  onClickBuy,
  onClickFavorite,
}: Props) {
  const [itemCount, setItemCount] = useState(0);
  const onCountDown = () => {
    // add your code here, such as sending count data to server
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };
  const onCountUp = () => {
    // add your code here, such as sending count data to server
    setItemCount(itemCount + 1);
  };
  const onRemoveItem = () => {
    // add your code here, such as sending count data to server
    setItemCount(0);
  };
  return (
    <div
      className={[styles["wrapper"], styles[`variant-${variant}`], className].join(
        " "
      )}
    >
      <div className={styles["image-wrapper"]}>
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
      </div>
      <div className={styles["body"]}>
        <div className={styles["content"]}>
          {/* You may replace the a tag with a Link if you use NextJS  */}
          <a className={styles["link"]} href={href}>
            <div className={styles["title-line"]}>
              <h3 className={[styles["t-left"], styles["title"]].join(" ")}>
                {title}
              </h3>
              {price && (
                <div className={[styles["t-right"], styles["price"]].join(" ")}>
                  {price}
                </div>
              )}
            </div>
            {description && <p className={styles["desc"]}>{description}</p>}
          </a>
        </div>

        <div className={styles["footer"]}>
          <div className={styles["f-left"]}>
            {category && <h6 className={styles["category"]}>{category}</h6>}
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
          <div className={styles["f-right"]}>
            {rating && (
              <button
                className={[styles["favorite"], styles["favorite-btn"]].join(
                  " "
                )}
                type="button"
                onClick={() => {
                  // add on click behavior here eg:
                  onClickFavorite && onClickFavorite();
                }}
              >
                {(iconFavoriteOn || iconFavoriteOff) && (
                  <span
                    className={[
                      styles["favorite-icon"],
                      isFavorite && styles["favorite-active"],
                    ].join(" ")}
                  >
                    {isFavorite ? iconFavoriteOn : iconFavoriteOff}
                  </span>
                )}
                <span className={styles["favorite-text"]}>{rating}</span>
              </button>
            )}
          </div>
        </div>

        {withItemCount && (
          <div
            className={[styles["footer"], styles["footer-secondary"]].join(" ")}
          >
            <div className={styles["f-left"]}>
              <div className={styles["count-controls"]}>
                <button
                  type="button"
                  className={[styles["count-btn"], styles["count-down"]].join(
                    " "
                  )}
                  onClick={onCountDown}
                >
                  {iconMinus || "x"}
                </button>
                <span className={styles["count-number"]}>{itemCount}</span>
                <button
                  type="button"
                  className={[styles["count-btn"], styles["count-up"]].join(
                    " "
                  )}
                  onClick={onCountUp}
                >
                  {iconAdd || "+"}
                </button>

                {itemCount > 0 && (
                  <button
                    type="button"
                    className={[styles["count-btn"], styles["remove-btn"]].join(
                      " "
                    )}
                    onClick={onRemoveItem}
                  >
                    {iconRemove || "x"}
                  </button>
                )}
              </div>
            </div>
            <div className={styles["f-right"]}>
              <div className={styles["btns-group"]}>
                {buyButtonText && (
                  <button className={styles["btn-text"]} onClick={() => {
                    // add on click behavior here eg:
                    onClickBuy && onClickBuy();
                  }}>
                    {buyButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

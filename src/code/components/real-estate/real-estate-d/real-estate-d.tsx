import styles from "./real-estate-d.module.css";

type ActionType = {
  icon?: React.ReactElement;
  title?: string;
  showTitle?: boolean;
  iconPosition?: "left" | "right";
  onClick?: () => void;
};

type Props = {
  className?: string;
  imageSrc?: string;
  title?: string;
  imageText?: React.ReactNode;
  description?: React.ReactNode;
  price?: string;
  href?: string;
  location?: React.ReactNode;
  locationIcon?: React.ReactNode;
  roomsInformation?: React.ReactNode;
  roomsInformationIcon?: React.ReactNode;
  buildingInformation?: React.ReactNode;
  buildingInformationIcon?: React.ReactNode;
  rating?: React.ReactNode;
  ratingIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  variant?: "default" | "simple" | "card-full";
  footerLeftDetails?: ActionType[];
  footerRightDetails?: ActionType[];
};

export default function RealEstateD({
  className,
  imageSrc,
  title,
  imageText,
  description,
  price,
  href,
  location,
  locationIcon,
  roomsInformation,
  roomsInformationIcon,
  buildingInformation,
  buildingInformationIcon,
  rating,
  ratingIcon,
  rounded = "medium",
  variant,
  footerLeftDetails: footerLeftActions,
  footerRightDetails: footerRightActions,
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["image-wrapper"]}>
        {/* You may need to replace the a tag with a Link if you use Next.js  */}
        {/* If you use Next.js, replace 'img' with 'Image' element */}
        <img
          className={[styles["image"], styles["square"]].join(" ")}
          src={imageSrc}
          alt={title || ""}
          width={360}
          height={360}
          loading="lazy"
        />
        {imageText && (
          <div className={styles["image-text"]}>
            <p>{imageText}</p>
          </div>
        )}
      </div>

      <div className={styles["body"]}>
        {/* You may replace the a tag with a Link if you use NextJS, or simply remove it if you do not want link  */}
        <a href={href} className={styles["body-link"]}>
          <div className={styles["body-content"]}>
            <div>
              {price && <h3 className={styles["price"]}>{price}</h3>}
              {description && (
                <div className={styles["desc"]}>
                  <p>{description}</p>
                </div>
              )}

              <div className={styles["characteristics"]}>
                {location && (
                  <CharacteristicItem
                    icon={locationIcon}
                    description={location}
                  />
                )}
                {roomsInformation && (
                  <CharacteristicItem
                    icon={roomsInformationIcon}
                    description={roomsInformation}
                  />
                )}
                {buildingInformation && (
                  <CharacteristicItem
                    icon={buildingInformationIcon}
                    description={buildingInformation}
                  />
                )}
                {rating && (
                  <CharacteristicItem icon={ratingIcon} description={rating} />
                )}
              </div>
            </div>
          </div>
        </a>

        <div className={styles["footer"]}>
          <div className={styles["f-left"]}>
            {/* You may replace this button with button-a, button-b, ... */}
            <div className={styles["f-details"]}>
              {footerLeftActions?.map((action, index) => (
                <ActionButton
                  key={action.title || `action-${index}`}
                  action={action}
                />
              ))}
            </div>
          </div>
          <div className={styles["f-right"]}>
            <div className={styles["f-details"]}>
              {footerRightActions?.map((action, index) => (
                <ActionButton
                  key={action.title || `action-${index}`}
                  action={action}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ action }: { action: ActionType }) {
  return (
    <button
      type="button"
      className={styles["action-button"]}
      title={action.title}
      onClick={() => {
        // add on click behavior here eg:
        action.onClick && action.onClick();
      }}
    >
      {action.icon && action.iconPosition !== "right" && (
        <span className={styles["icon"]}>{action.icon}</span>
      )}
      {action.title && action.showTitle && (
        <span className={styles["text"]}>{action.title}</span>
      )}
      {action.icon && action.iconPosition === "right" && (
        <span className={styles["icon"]}>{action.icon}</span>
      )}
    </button>
  );
}

function CharacteristicItem({
  icon,
  description,
}: {
  icon?: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className={styles["charac-item"]}>
      {icon && <span className={styles["c-icon"]}>{icon}</span>}
      <span className={styles["c-text"]}>{description}</span>
    </div>
  );
}

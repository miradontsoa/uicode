import styles from "./badge-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  size?: "x-small" | "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "full";
  border?: "none" | "thin" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue" | "red" | "blue-translucent";
  // Optional event handler
  onClick?: React.MouseEventHandler;
  onClickClose?: React.MouseEventHandler;
};
export default function BadgeA({
  className,
  children,
  beforeElement,
  afterElement,
  closable,
  closeIcon,
  size,
  rounded,
  border,
  variant = "default",
  onClick,
  onClickClose,
}: Props) {
  return (
    <>
      <div
        className={[
          styles["wrapper"],
          styles[`s-${size}`],
          styles[`r-${rounded}`],
          styles[`b-${border}`],
          styles[`variant-${variant}`],
          beforeElement && styles[`with-before`],
          (closable || afterElement) && styles[`with-after`],
          onClick && styles[`clickable`],
          className,
        ].join(" ")}
        onClick={onClick}
      >
        {beforeElement && (
          <div className={styles["before-element"]}>{beforeElement}</div>
        )}
        <div className={styles["content"]}>
          <div>{children}</div>
        </div>
        {afterElement && (
          <div className={styles["after-element"]}>{afterElement}</div>
        )}
        {closable && (
          <button
            className={styles["close-icon"]}
            type="button"
            onClick={onClickClose}
          >
            {closeIcon || <IconClose />}
          </button>
        )}
      </div>
    </>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      style={{
        width: "1em",
        height: "1em",
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.13017 4.13017C4.30374 3.95661 4.58515 3.95661 4.75871 4.13017L8 7.37144L11.2413 4.13017C11.4149 3.95661 11.6962 3.95661 11.8698 4.13017C12.0434 4.30374 12.0434 4.58515 11.8698 4.75871L8.62856 8L11.8698 11.2413C12.0434 11.4149 12.0434 11.6962 11.8698 11.8698C11.6962 12.0434 11.4149 12.0434 11.2413 11.8698L8 8.62856L4.75871 11.8698C4.58515 12.0434 4.30374 12.0434 4.13017 11.8698C3.95661 11.6962 3.95661 11.4149 4.13017 11.2413L7.37144 8L4.13017 4.75871C3.95661 4.58515 3.95661 4.30374 4.13017 4.13017Z"
        fill="currentColor"
      />
    </svg>
  );
}

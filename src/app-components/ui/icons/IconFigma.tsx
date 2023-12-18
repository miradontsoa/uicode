import classNames from "classnames";
import { CSSProperties } from "react";

export default function IconFigma({
  className,
  style,
  variant,
}: {
  className?: string;
  style?: CSSProperties;
  variant?: "colored" | "currentColor";
}) {
  return (
    <svg
      className={className}
      style={{ ...style }}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_35_6)">
        <path
          d="M16.5015 47C20.6407 47 24 43.5653 24 39.3333V31.6667H16.5015C12.3623 31.6667 9.00299 35.1013 9.00299 39.3333C9.00299 43.5653 12.3623 47 16.5015 47Z"
          fill={variant === "currentColor" ? "currentColor" : "#0ACF83"}
        />
        <path
          d="M9.00299 24C9.00299 19.768 12.3623 16.3333 16.5015 16.3333H24V31.6667H16.5015C12.3623 31.6667 9.00299 28.232 9.00299 24Z"
          fill={variant === "currentColor" ? "currentColor" : "#A259FF"}
        />
        <path
          d="M9.0029 8.66667C9.0029 4.43467 12.3622 1 16.5014 1H23.9999V16.3333H16.5014C12.3622 16.3333 9.0029 12.8987 9.0029 8.66667Z"
          fill={variant === "currentColor" ? "currentColor" : "#F24E1E"}
        />
        <path
          d="M24 1H31.4985C35.6377 1 38.997 4.43467 38.997 8.66667C38.997 12.8987 35.6377 16.3333 31.4985 16.3333H24V1Z"
          fill={variant === "currentColor" ? "currentColor" : "#FF7262"}
        />
        <path
          d="M38.997 24C38.997 28.232 35.6377 31.6667 31.4985 31.6667C27.3593 31.6667 24 28.232 24 24C24 19.768 27.3593 16.3333 31.4985 16.3333C35.6377 16.3333 38.997 19.768 38.997 24Z"
          fill={variant === "currentColor" ? "currentColor" : "#1ABCFE"}
        />
      </g>
      <defs>
        <clipPath id="clip0_35_6">
          <rect
            width="30"
            height="46"
            fill="white"
            transform="translate(9 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

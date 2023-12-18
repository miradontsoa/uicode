import classNames from "classnames";
import React from "react";
import styles from "./Icon.module.css";

type Props = {
  className?: string;
  name?: string;
  children: React.ReactNode;
  size?: "text" | "medium" | "small" | "large" | "x-large";
};

const Icon = ({
  className,
  name,
  size = "text",
  children,
}: Props): JSX.Element => {
  /* var icon = lazy(() => 
        import("react-icons/fa")
         .then(({FaBeer}) => ({default:FaBeer})),
    ); */
  // const iconArgs = iconName.split('-');
  let iconClassName = "icon";
  if (size === "small") {
    iconClassName += " icon-small";
  }
  if (size === "medium") {
    iconClassName += " icon-medium";
  }
  if (size === "large") {
    iconClassName += " icon-large";
  }
  return (
    <span
      className={classNames(styles.icon, styles[`size-${size}`], className)}
    >
      {children}
    </span>
  );
};

export default Icon;

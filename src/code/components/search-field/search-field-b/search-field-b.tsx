import { useState } from "react";
import InputContainerA from "../../input/input-container-a/input-container-a";
import styles from "./search-field-b.module.css";

type Props = {
  className?: string;
  searchButtonText?: React.ReactNode;
  searchButtonIcon?: React.ReactNode;
  beforeElement?: React.ReactNode;
  placeholder?: string;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "style-a";
  onSearch?: (searchText: string) => void;
};

export default function SearchFieldB({
  className,
  searchButtonText,
  searchButtonIcon,
  beforeElement,
  placeholder = "Search item ...",
  rounded = "medium",
  variant,
  onSearch,
}: Props) {
  // Here is a simple implementation of the email value handling
  const [searchText, setTextSearch] = useState("");
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <form
        className={styles["search-form"]}
        onSubmit={(e) => {
          // sample behavior when form is submitted
          onSearch && onSearch(searchText);
          setTextSearch("");
          e.preventDefault();
        }}
      >
        <InputContainerA
          className={styles["input-search"]}
          shadow="none"
          height="large"
          border="thin"
          rounded={rounded}
          beforeElement={beforeElement}
        >
          <input
            type={"text"}
            value={searchText}
            placeholder={placeholder}
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </InputContainerA>

        <button
          type="submit"
          className={[
            styles["search-btn"],
            !searchButtonText && styles["icon-only"],
          ].join(" ")}
        >
          {!searchButtonText && !searchButtonIcon && (
            <span className={styles["btn-text"]}>Search</span>
          )}
          {searchButtonText && (
            <span className={styles["btn-text"]}>{searchButtonText}</span>
          )}
          {searchButtonIcon && (
            <span className={styles["btn-icon"]}>{searchButtonIcon}</span>
          )}
        </button>
      </form>
    </div>
  );
}

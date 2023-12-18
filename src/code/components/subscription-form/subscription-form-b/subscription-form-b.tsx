import { useState } from "react";
import InputContainerA from "../../input/input-container-a/input-container-a";
import ButtonA from "../../button/button-a/button-a";
import styles from "./subscription-form-b.module.css";

type Props = {
  className?: string;
  title?: string;
  description?: React.ReactNode;
  subscribeButtonText?: string;
  emailPlaceholder?: string;
  emailIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "simple";
  onSubscribe?: (email: string) => void;
};

export default function SubscriptionFormB({
  className,
  title,
  description,
  subscribeButtonText = "Subscribe",
  emailPlaceholder = "Email address",
  emailIcon,
  rounded = "medium",
  variant,
  onSubscribe,
}: Props) {
  // Here is a simple implementation of the email value handling
  const [email, setEmail] = useState("");
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
        onSubmit={(e) => {
          // sample behavior when form is submitted
          onSubscribe && onSubscribe(email);
          setEmail("");
          e.preventDefault();
        }}
      >
        <h4 className={styles["title"]}>{title}</h4>
        {description && (
          <div className={styles["desc"]}>
            <p>{description}</p>
          </div>
        )}

        <div className={styles["input-group"]}>
          <InputContainerA
            className={styles["input-email"]}
            shadow="none"
            rounded="medium"
            beforeElement={
              <span title={emailPlaceholder} className={styles["email-icon"]}>
                {emailIcon || <EmailIcon />}
              </span>
            }
          >
            <input
              type={"email"}
              value={email}
              placeholder={emailPlaceholder}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainerA>
          <ButtonA
            type="submit"
            className={styles["submit-btn"]}
            rounded="medium"
            shadow="none"
          >
            {subscribeButtonText}
          </ButtonA>
        </div>
      </form>
    </div>
  );
}


// From Heroicons
function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: "1.5rem", height: "1.5rem" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z"
        fill="currentColor"
      />
      <path
        d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z"
        fill="currentColor"
      />
    </svg>
  );
}
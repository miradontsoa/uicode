import { useState } from "react";
import InputContainerA from "../../input/input-container-a/input-container-a";
import ButtonA from "../../button/button-a/button-a";
import styles from "./sign-in-form-b.module.css";

type Props = {
  className?: string;
  title?: string;
  description?: React.ReactNode;
  signInButtonText?: string;
  emailPlaceholder?: string;
  emailIcon?: React.ReactNode;
  passwordPlaceholder?: string;
  passwordIcon?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "simple";
  onSubmit?: (email: string, password: string) => void;
};

export default function SignInFormB({
  className,
  title,
  description,
  signInButtonText = "Sign in",
  emailPlaceholder = "Email address",
  emailIcon,
  passwordPlaceholder = "Password",
  passwordIcon,
  rounded = "medium",
  variant,
  onSubmit,
}: Props) {
  // Here is a simple implementation of the email value handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          onSubmit && onSubmit(email, password);
          setEmail("");
          setPassword("");
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
            className={[styles["input-container"], styles["input-email"]].join(
              " "
            )}
            shadow="none"
            height="large"
            rounded="medium"
            border="thin"
            beforeElement={
              <span title={emailPlaceholder} className={styles["input-icon"]}>
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
          <InputContainerA
            className={[
              styles["input-container"],
              styles["input-password"],
            ].join(" ")}
            shadow="none"
            height="large"
            rounded="medium"
            border="thin"
            beforeElement={
              <span title={emailPlaceholder} className={styles["input-icon"]}>
                {passwordIcon || <PasswordIcon />}
              </span>
            }
          >
            <input
              type={"password"}
              value={password}
              placeholder={passwordPlaceholder}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainerA>
          <ButtonA
            type="submit"
            height="large"
            className={styles["submit-btn"]}
            rounded="medium"
            shadow="none"
          >
            {signInButtonText}
          </ButtonA>

          <div className={styles["login-issue"]}>
            <div>
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </div>
      </form>

      <div className={styles["sign-in-provider"]}>
        <p className={styles["sp-title"]}>Or sign in with</p>
        <ButtonA
          type="submit"
          height="large"
          className={[styles["sp-btn"], styles["sp-google"]].join(" ")}
          rounded="medium"
          shadow="none"
        >
          Google Account G
        </ButtonA>
      </div>
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

// From Heroicons
function PasswordIcon() {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 1.5C12.0221 1.5 9 4.52208 9 8.25C9 8.64372 9.03379 9.03016 9.0988 9.40639C9.16599 9.79527 9.06678 10.1226 8.87767 10.3117L2.37868 16.8107C1.81607 17.3733 1.5 18.1363 1.5 18.932V21.75C1.5 22.1642 1.83579 22.5 2.25 22.5H6C6.41421 22.5 6.75 22.1642 6.75 21.75V20.25H8.25C8.66421 20.25 9 19.9142 9 19.5V18H10.5C10.6989 18 10.8897 17.921 11.0303 17.7803L13.6883 15.1223C13.8774 14.9332 14.2047 14.834 14.5936 14.9012C14.9698 14.9662 15.3563 15 15.75 15C19.4779 15 22.5 11.9779 22.5 8.25C22.5 4.52208 19.4779 1.5 15.75 1.5ZM15.75 4.5C15.3358 4.5 15 4.83579 15 5.25C15 5.66421 15.3358 6 15.75 6C16.9926 6 18 7.00736 18 8.25C18 8.66421 18.3358 9 18.75 9C19.1642 9 19.5 8.66421 19.5 8.25C19.5 6.17893 17.8211 4.5 15.75 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

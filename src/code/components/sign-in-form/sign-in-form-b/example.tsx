import { useState } from "react";
import SignInFormB from "./sign-in-form-b";

export default function Example() {
  const [emailAndPassword, setEmailAndPassword] = useState("-");
  return (
    <div className="grid gap-4 max-w-sm mx-auto">
      <div>
        <SignInFormB
          title={"Sign in to your account"}
          description={
            "Sign in by using your email and password or with your Google account."
          }
          signInButtonText="Sign in"
          emailPlaceholder="Email address"
          passwordPlaceholder="Password"
          onSubmit={(email, password) => {
            setEmailAndPassword(`${email} - ${password}`);
          }}
        />
      </div>
      <div>
        <p>Sign in info: {emailAndPassword}</p>
      </div>
    </div>
  );
}

import { useState } from "react";
import SignInFormA from "./sign-in-form-a";


export default function Example() {
  const [emailAndPassword, setEmailAndPassword] = useState("-");
  return (
    <div className="grid gap-4 max-w-sm mx-auto">
      <div>
        <SignInFormA
          title={"Sign in to your account"}
          description={"Sign in by using your email and password."}
          signInButtonText="Sign in"
          emailPlaceholder="Email address"
          passwordPlaceholder="Password"
          onSubmit={(email, password) => {
            setEmailAndPassword(`${email} - ${password}`);
          }}
        />
      </div>
      <div><p>Sign in info: {emailAndPassword}</p></div>
    </div>
  );
}

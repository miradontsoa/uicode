import { useState } from "react";
import SubscriptionFormB from "./subscription-form-b";


export default function Example() {
  const [subscriberEmail, setSubscriberEmail] = useState("-");
  return (
    <div className="grid gap-4 max-w-md mx-auto">
      <div>
        <SubscriptionFormB
          title={"Subscription"}
          description={"Receive our latest news and update right in your inbox."}
          subscribeButtonText="Subscribe"
          emailPlaceholder="Email address ..."
          onSubscribe={(email) => {
            setSubscriberEmail(email);
          }}
        />
      </div>
      <div><p>Subscriber email: {subscriberEmail}</p></div>
    </div>
  );
}

import { useState } from "react";
import SubscriptionFormA from "./subscription-form-a";

export default function Example() {
  const [subscriberEmail, setSubscriberEmail] = useState("-");
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <SubscriptionFormA
          title={"Subscription"}
          description={
            "Receive our latest news and update right in your inbox."
          }
          subscribeButtonText="Subscribe"
          emailPlaceholder="Email address ..."
          onSubscribe={(email) => {
            setSubscriberEmail(email);
          }}
        />
      </div>
      <div>
        <SubscriptionFormA
          title={"Subscription"}
          description={
            "Receive our latest news and update right in your inbox."
          }
          subscribeButtonText="Subscribe"
          emailPlaceholder="Email address ..."
          variant="simple"
          onSubscribe={(email) => {
            setSubscriberEmail(email);
          }}
        />
      </div>
      <div><p>Subscriber email: {subscriberEmail}</p></div>
    </div>
  );
}

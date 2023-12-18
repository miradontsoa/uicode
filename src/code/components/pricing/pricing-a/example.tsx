import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import ButtonB from "../../button/button-b/button-b";
import PricingA from "./pricing-a";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <PricingA
          href="#"
          title={"Premium"}
          callToActionText="Choose this"
          price={
            <span>
              <span className="align-top text-3xl">$</span>
              <span>59</span>
            </span>
          }
          priceUnit={"per month"}
          description={"Suitable for any business with less than 500 customers."}
          availableIcon={<CheckCircleIcon />}
          unavailableIcon={<XCircleIcon />}
          features={[
            {
              title: "Unlimited users",
            },
            {
              title: "500 subscribers per month",
            },
            {
              title: "Free support",
            },
            {
              title: "No enterprise features",
              unavailable: true,
            },
          ]}
        />
      </div>
      <div>
        <PricingA
          href="#"
          title={"Standard"}
          variant={"red"}
          rounded={"medium"}
          callToActionElement={<ButtonB className="w-full" variant="light-red">Choose this</ButtonB>}
          price={
            <span>
              <span className="align-top text-3xl">$</span>
              <span>59</span>
            </span>
          }
          priceUnit={"per month"}
          description={"Suitable for any business with less than 500 customers."}
          availableIcon={<CheckCircleIcon />}
          unavailableIcon={<XCircleIcon />}
          features={[
            {
              title: "Unlimited users",
            },
            {
              title: "500 subscribers per month",
            },
            {
              title: "Free support",
            },
            {
              title: "No enterprise features",
              unavailable: true,
            },
          ]}
        />
      </div>
    </div>
  );
}

import { CheckIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import ButtonA from "../../button/button-a/button-a";
import InputContainerB from "./input-container-b";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <InputContainerB label="Label">
          <input type="text" placeholder="Input..." />
        </InputContainerB>
      </div>
      <div>
        <InputContainerB
          label={"Email"}
          rounded="medium"
          labelBorder="thin"
          beforeElement={<EnvelopeIcon className="w-5" />}
        >
          <input title="email" type="email"  />
        </InputContainerB>
      </div>
      <div>
        <InputContainerB
          height="large"
          rounded="medium"
          border="medium"
          label="Destination"
          beforeElement={<MapPinIcon className="w-6" />}
        >
          <input type="text" defaultValue={"Sydney, Australia"} />
        </InputContainerB>
      </div>
      <div>
        <InputContainerB
          label={"Name"}
          border="thin"
          shadow="flat"
          afterElement={
            <ButtonA size="small" iconOnly variant="transparent">
              <CheckIcon className="w-5" />
            </ButtonA>
          }
        >
          <input type="text" placeholder="Your Name..." />
        </InputContainerB>
      </div>
      <div>
        <InputContainerB label={"Comment"}>
          <textarea placeholder="textarea..." />
        </InputContainerB>
      </div>
    </div>
  );
}

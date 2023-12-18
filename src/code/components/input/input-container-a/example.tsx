import { CheckIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import ButtonA from "../../button/button-a/button-a";
import InputContainerA from "./input-container-a";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <InputContainerA>
          <input type="text" placeholder="Input..." />
        </InputContainerA>
      </div>
      <div>
        <InputContainerA
          rounded="medium"
          beforeElement={<EnvelopeIcon className="w-5" />}
        >
          <input type="email" placeholder="Email address..." />
        </InputContainerA>
      </div>
      <div>
        <InputContainerA
          height="large"
          rounded="medium"
          border="medium"
          label="Destination"
          beforeElement={<MapPinIcon className="w-6" />}
        >
          <input type="text" defaultValue={"Sydney, Australia"} />
        </InputContainerA>
      </div>
      <div>
        <InputContainerA
          beforeElement={"Name:"}
          border="thin"
          shadow="flat"
          afterElement={
            <ButtonA size="small" iconOnly variant="transparent">
              <CheckIcon className="w-5" />
            </ButtonA>
          }
        >
          <input type="text" placeholder="Your Name..." />
        </InputContainerA>
      </div>
      <div>
        <InputContainerA>
          <textarea placeholder="textarea..." />
        </InputContainerA>
      </div>
    </div>
  );
}

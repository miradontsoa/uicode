import { PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import ButtonD from "./button-d";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonD>Shop now</ButtonD>
        </div>
        <div>
          <ButtonD variant="black">Settings</ButtonD>
        </div>
        <div>
          <ButtonD variant="blue">Download</ButtonD>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonD size="x-small">X-small</ButtonD>
        </div>
        <div>
          <ButtonD size="small">Small</ButtonD>
        </div>
        <div>
          <ButtonD size="medium">Medium</ButtonD>
        </div>
        <div>
          <ButtonD size="large">A very Large</ButtonD>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonD size="small" iconOnly>
            <PlayIcon className="w-5" />
          </ButtonD>
        </div>
        <div>
          <ButtonD size="large" variant="red" rounded="medium" iconOnly>
            <ChatBubbleLeftIcon className="w-6" />
          </ButtonD>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonD border="thin">Border Thin</ButtonD>
        </div>
        <div>
          <ButtonD border="medium">Border Medium</ButtonD>
        </div>
        <div>
          <ButtonD border="thick" variant="blue" shadow="medium">Border Thick</ButtonD>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonD rounded="none">Border radius</ButtonD>
        </div>
        <div>
          <ButtonD rounded="small">Border radius</ButtonD>
        </div>
        <div>
          <ButtonD rounded="medium">Border radius</ButtonD>
        </div>
        <div>
          <ButtonD rounded="large">Border radius</ButtonD>
        </div>
        <div>
          <ButtonD rounded="full">Border radius</ButtonD>
        </div>
      </div>
    </div>
  );
}

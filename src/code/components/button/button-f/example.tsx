import { PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import ButtonF from "./button-f";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonF>Shop now</ButtonF>
        </div>
        <div>
          <ButtonF variant="black">Settings</ButtonF>
        </div>
        <div>
          <ButtonF variant="dark-blue">Download</ButtonF>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonF size="x-small">X-small</ButtonF>
        </div>
        <div>
          <ButtonF size="small">Small</ButtonF>
        </div>
        <div>
          <ButtonF size="medium">Medium</ButtonF>
        </div>
        <div>
          <ButtonF size="large">A very Large</ButtonF>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonF size="small" iconOnly>
            <PlayIcon className="w-5" />
          </ButtonF>
        </div>
        <div>
          <ButtonF size="large" variant="dark-red" rounded="medium" iconOnly>
            <ChatBubbleLeftIcon className="w-6" />
          </ButtonF>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonF border="thin">Border Thin</ButtonF>
        </div>
        <div>
          <ButtonF border="medium">Border Medium</ButtonF>
        </div>
        <div>
          <ButtonF border="thick" variant="dark-blue" shadow="medium">Border Thick</ButtonF>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonF rounded="none">Border radius</ButtonF>
        </div>
        <div>
          <ButtonF rounded="small">Border radius</ButtonF>
        </div>
        <div>
          <ButtonF rounded="medium">Border radius</ButtonF>
        </div>
        <div>
          <ButtonF rounded="large">Border radius</ButtonF>
        </div>
        <div>
          <ButtonF rounded="full">Border radius</ButtonF>
        </div>
      </div>
    </div>
  );
}

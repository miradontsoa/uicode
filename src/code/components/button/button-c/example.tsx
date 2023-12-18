import { PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ButtonC from "./button-c";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonC>Shop now</ButtonC>
        </div>
        <div>
          <ButtonC variant="light-blue">Download</ButtonC>
        </div>
        <div>
          <ButtonC variant="black" shadow="medium">
            Settings
          </ButtonC>
        </div>
        <div>
          <ButtonC variant="dark-blue" shadow="medium">
            Register
          </ButtonC>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonC size="x-small">X-small</ButtonC>
        </div>
        <div>
          <ButtonC size="small">Small</ButtonC>
        </div>
        <div>
          <ButtonC size="medium">Medium</ButtonC>
        </div>
        <div>
          <ButtonC size="large">A very Large</ButtonC>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonC size="small" iconOnly>
            <PlayIcon className="w-5" />
          </ButtonC>
        </div>
        <div>
          <ButtonC size="large" variant="red" rounded="medium" iconOnly>
            <ChatBubbleOvalLeftEllipsisIcon className="w-6" />
          </ButtonC>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonC border="thin">Border Thin</ButtonC>
        </div>
        <div>
          <ButtonC border="medium">Border Medium</ButtonC>
        </div>
        <div>
          <ButtonC border="thick" variant="dark-blue" shadow="medium">Border Thick</ButtonC>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonC rounded="none">Border radius</ButtonC>
        </div>
        <div>
          <ButtonC rounded="small">Border radius</ButtonC>
        </div>
        <div>
          <ButtonC rounded="medium">Border radius</ButtonC>
        </div>
        <div>
          <ButtonC rounded="large">Border radius</ButtonC>
        </div>
        <div>
          <ButtonC rounded="full">Border radius</ButtonC>
        </div>
      </div>
    </div>
  );
}

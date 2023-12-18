import { PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import ButtonB from "./button-b";

export default function Example() {
  return (
    <div>
      <div className="flex  flex-wrap gap-4 mx-auto">
        <div>
          <ButtonB variant="light-blue">Download</ButtonB>
        </div>
        <div>
          <ButtonB>Shop now</ButtonB>
        </div>
        <div>
          <ButtonB variant="red">Settings</ButtonB>
        </div>
      </div>
      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonB size="x-small">X-small</ButtonB>
        </div>
        <div>
          <ButtonB size="small">Small</ButtonB>
        </div>
        <div>
          <ButtonB size="medium">Medium</ButtonB>
        </div>
        <div>
          <ButtonB size="large">A very Large</ButtonB>
        </div>
      </div>
      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonB size="small" iconOnly>
            <PlayIcon className="w-5" />
          </ButtonB>
        </div>
        <div>
          <ButtonB size="large" variant="light-red" rounded="medium" iconOnly>
            <ChatBubbleLeftIcon className="w-6" />
          </ButtonB>
        </div>
      </div>
      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonB rounded="none">Border radius</ButtonB>
        </div>
        <div>
          <ButtonB rounded="small">Border radius</ButtonB>
        </div>
        <div>
          <ButtonB rounded="medium">Border radius</ButtonB>
        </div>
        <div>
          <ButtonB rounded="large">Border radius</ButtonB>
        </div>
        <div>
          <ButtonB rounded="full">Border radius</ButtonB>
        </div>
      </div>
    </div>
  );
}

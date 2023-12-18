import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import ButtonA from "./button-a";

export default function Example() {
  return (
    <div>
      <div className="flex  flex-wrap gap-4 mx-auto">
        <div>
          <ButtonA variant="light-blue">Download</ButtonA>
        </div>
        <div>
          <ButtonA>Shop now</ButtonA>
        </div>
        <div>
          <ButtonA variant="red">Settings</ButtonA>
        </div>
        <div>
          <ButtonA variant="gradient">Gradient</ButtonA>
        </div>
        <div>
          <ButtonA variant="transparent">Transparent</ButtonA>
        </div>
      </div>
      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonA size="x-small">X-small</ButtonA>
        </div>
        <div>
          <ButtonA size="small">Small</ButtonA>
        </div>
        <div>
          <ButtonA size="medium">Medium</ButtonA>
        </div>
        <div>
          <ButtonA size="large">A very Large</ButtonA>
        </div>
      </div>
      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonA size="small" iconOnly>
            <PlayIcon className="w-5" />
          </ButtonA>
        </div>
        <div>
          <ButtonA size="small" iconOnly variant="transparent">
            <HeartIcon className="w-5" />
          </ButtonA>
        </div>
        <div>
          <ButtonA size="large" variant="light-red" rounded="medium" iconOnly>
            <HeartIcon className="w-6" />
          </ButtonA>
        </div>
        <div>
          <ButtonA size="large" variant="gradient" rounded="large" iconOnly>
            <ChatBubbleLeftIcon className="w-6" />
          </ButtonA>
        </div>
      </div>
      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonA rounded="none">Border radius</ButtonA>
        </div>
        <div>
          <ButtonA rounded="small">Border radius</ButtonA>
        </div>
        <div>
          <ButtonA rounded="medium">Border radius</ButtonA>
        </div>
        <div>
          <ButtonA rounded="large">Border radius</ButtonA>
        </div>
        <div>
          <ButtonA rounded="full">Border radius</ButtonA>
        </div>
      </div>
    </div>
  );
}

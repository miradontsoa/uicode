import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import ButtonTailwindA from "./button-tailwind-a";

export default function Example() {
  return (
    <div>
      <div className="flex  flex-wrap gap-4 mx-auto">
        <div>
          <ButtonTailwindA variant="light-blue">Download</ButtonTailwindA>
        </div>
      </div>
    </div>
  );
}

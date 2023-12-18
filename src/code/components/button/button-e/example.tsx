import { PlayIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import ButtonE from "./button-e";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonE iconElement={<PlayIcon className="w-5" />}>Play now</ButtonE>
        </div>
        <div>
          <ButtonE
            iconElement={<ArrowDownTrayIcon className="w-5" />}
            iconPosition="left"
            variant="red"
            rounded="large"
          >
            Download
          </ButtonE>
        </div>
        <div>
          <ButtonE
            iconElement={<ChatBubbleOvalLeftEllipsisIcon className="w-5" />}
            variant="purple"
          >
            Chat
          </ButtonE>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonE size="x-small" iconElement={<PlayIcon className="w-3" />}>
            X-small
          </ButtonE>
        </div>
        <div>
          <ButtonE size="small" iconElement={<PlayIcon className="w-4" />}>
            Small
          </ButtonE>
        </div>
        <div>
          <ButtonE size="medium" iconElement={<PlayIcon className="w-5" />}>
            Medium
          </ButtonE>
        </div>
        <div>
          <ButtonE size="large" iconElement={<PlayIcon className="w-6" />}>
            A very Large
          </ButtonE>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonE size="small" iconElement={<PlayIcon className="w-5" />} />
        </div>
        <div>
          <ButtonE
            size="large"
            variant="purple"
            iconElement={<ChatBubbleOvalLeftEllipsisIcon className="w-5" />}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonE rounded="none" 
            iconElement={<ArrowDownTrayIcon className="w-5" />}>Border radius</ButtonE>
        </div>
        <div>
          <ButtonE rounded="small" 
            iconElement={<ArrowDownTrayIcon className="w-5" />}>Border radius</ButtonE>
        </div>
        <div>
          <ButtonE rounded="medium" 
            iconElement={<ArrowDownTrayIcon className="w-5" />}>Border radius</ButtonE>
        </div>
        <div>
          <ButtonE rounded="large" 
            iconElement={<ArrowDownTrayIcon className="w-5" />}>Border radius</ButtonE>
        </div>
        <div>
          <ButtonE rounded="full" 
            iconElement={<ArrowDownTrayIcon className="w-5" />}>Border radius</ButtonE>
        </div>
      </div>
    </div>
  );
}

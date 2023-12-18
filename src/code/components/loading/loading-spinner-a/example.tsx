import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import AvatarA from "../../avatar/avatar-a/avatar-a";
import LoadingSpinnerA from "./loading-spinner-a";

export default function Example() {
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        <div>
          <LoadingSpinnerA />
        </div>
        <div>
          <LoadingSpinnerA variant="blue" />
        </div>
        <div>
          <LoadingSpinnerA spinner1Border="none" />
        </div>
        <div>
          <LoadingSpinnerA spinner2Border="none" />
        </div>
      </div>
      <p className={"mt-4"}>With content:</p>
      <div className="flex gap-4 flex-wrap mt-4">
        <div>
          <LoadingSpinnerA>LOADING CONTENT</LoadingSpinnerA>
        </div>
        <div>
          <LoadingSpinnerA alignContent="center">
            CENTERED CONTENT
          </LoadingSpinnerA>
        </div>
      </div>
    </div>
  );
}

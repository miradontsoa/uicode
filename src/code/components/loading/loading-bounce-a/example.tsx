import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import AvatarA from "../../avatar/avatar-a/avatar-a";
import LoadingBounceA from "./loading-bounce-a";

export default function Example() {
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        <div className="p-8">
          <LoadingBounceA />
        </div>
        <div className="p-8">
          <LoadingBounceA variant="blue" />
        </div>
      </div>
      <p className={"mt-4"}>With content:</p>
      <div className="flex gap-4 flex-wrap mt-4">
        <div>
          <LoadingBounceA>LOADING CONTENT</LoadingBounceA>
        </div>
      </div>
    </div>
  );
}

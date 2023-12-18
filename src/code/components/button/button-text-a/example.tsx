import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ButtonTextA from "./button-text-a";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonTextA variant="black">Download</ButtonTextA>
        </div>
        <div>
          <ButtonTextA variant="blue">Learn more</ButtonTextA>
        </div>
        <div>
          <ButtonTextA>View Details  <ArrowUpRightIcon className="w-5" /></ButtonTextA>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonTextA size="x-small">X-small</ButtonTextA>
        </div>
        <div>
          <ButtonTextA size="small">Small</ButtonTextA>
        </div>
        <div>
          <ButtonTextA size="medium">Medium</ButtonTextA>
        </div>
        <div>
          <ButtonTextA size="large">A very Large</ButtonTextA>
        </div>
      </div> 
    </div>
  );
}

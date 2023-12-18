import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ButtonTextC from "./button-text-c";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonTextC variant="black">Download</ButtonTextC>
        </div>
        <div>
          <ButtonTextC variant="blue">Learn more</ButtonTextC>
        </div>
        <div>
          <ButtonTextC>View Details  <ArrowUpRightIcon className="w-5" /></ButtonTextC>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonTextC size="x-small">X-small</ButtonTextC>
        </div>
        <div>
          <ButtonTextC size="small">Small</ButtonTextC>
        </div>
        <div>
          <ButtonTextC size="medium">Medium</ButtonTextC>
        </div>
        <div>
          <ButtonTextC size="large">A very Large</ButtonTextC>
        </div>
      </div> 
    </div>
  );
}

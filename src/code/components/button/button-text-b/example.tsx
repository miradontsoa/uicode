import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ButtonTextB from "./button-text-b";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonTextB variant="black">Download</ButtonTextB>
        </div>
        <div>
          <ButtonTextB variant="blue">Learn more</ButtonTextB>
        </div>
        <div>
          <ButtonTextB>View Details  <ArrowUpRightIcon className="w-5" /></ButtonTextB>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonTextB size="x-small">X-small</ButtonTextB>
        </div>
        <div>
          <ButtonTextB size="small">Small</ButtonTextB>
        </div>
        <div>
          <ButtonTextB size="medium">Medium</ButtonTextB>
        </div>
        <div>
          <ButtonTextB size="large">A very Large</ButtonTextB>
        </div>
      </div> 
    </div>
  );
}

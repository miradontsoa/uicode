import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ButtonTextD from "./button-text-d";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <div>
          <ButtonTextD variant="black">Download</ButtonTextD>
        </div>
        <div>
          <ButtonTextD variant="blue">Learn more</ButtonTextD>
        </div>
        <div>
          <ButtonTextD>View Details  <ArrowUpRightIcon className="w-5" /></ButtonTextD>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <div>
          <ButtonTextD size="x-small">X-small</ButtonTextD>
        </div>
        <div>
          <ButtonTextD size="small">Small</ButtonTextD>
        </div>
        <div>
          <ButtonTextD size="medium">Medium</ButtonTextD>
        </div>
        <div>
          <ButtonTextD size="large">A very Large</ButtonTextD>
        </div>
      </div> 
    </div>
  );
}

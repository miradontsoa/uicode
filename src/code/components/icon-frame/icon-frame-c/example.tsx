import { LightBulbIcon } from "@heroicons/react/24/solid";
import IconFrameC from "./icon-frame-c";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <IconFrameC>
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameC>
      </div>
      <div>
        <IconFrameC rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameC>
      </div>
      <div>
        <IconFrameC variant="blue-light">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameC>
      </div>
      <div>
        <IconFrameC variant="blue-light" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameC>
      </div>
      <div>
        <IconFrameC variant="blue">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameC>
      </div>
      <div>
        <IconFrameC variant="blue" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameC>
      </div>
    </div>
  );
}

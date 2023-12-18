import { LightBulbIcon as LightBulbIconOutline } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import IconFrameB from "./icon-frame-b";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <IconFrameB>
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue-light">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue-light" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue-light-border">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue-light-border" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue-material">
          <LightBulbIconOutline style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
      <div>
        <IconFrameB variant="blue-material" rounded="full">
          <LightBulbIconOutline style={{ width: "2rem" }} />
        </IconFrameB>
      </div>
    </div>
  );
}

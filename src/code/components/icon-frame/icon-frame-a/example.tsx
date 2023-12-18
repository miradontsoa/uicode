import { LightBulbIcon as LightBulbIconOutline } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import IconFrameA from "./icon-frame-a";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <IconFrameA>
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA variant="blue-light">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA variant="blue-light" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA variant="blue">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA variant="blue" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA variant="blue-material">
          <LightBulbIconOutline style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
      <div>
        <IconFrameA variant="blue-material" rounded="full">
          <LightBulbIconOutline style={{ width: "2rem" }} />
        </IconFrameA>
      </div>
    </div>
  );
}

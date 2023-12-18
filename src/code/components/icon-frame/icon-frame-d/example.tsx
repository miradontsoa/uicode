import { LightBulbIcon } from "@heroicons/react/24/solid";
import IconFrameD from "./icon-frame-d";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <IconFrameD>
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD variant="gradient-border">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD variant="gradient-border" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD variant="gradient">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD variant="gradient" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD variant="blue-light">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
      <div>
        <IconFrameD variant="blue-light" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameD>
      </div>
    </div>
  );
}

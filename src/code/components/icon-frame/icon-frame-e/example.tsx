import { LightBulbIcon } from "@heroicons/react/24/solid";
import IconFrameE from "./icon-frame-e";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <IconFrameE>
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameE>
      </div>
      <div>
        <IconFrameE rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameE>
      </div>
      <div>
        <IconFrameE variant="gradient-border">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameE>
      </div>
      <div>
        <IconFrameE variant="gradient-border" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameE>
      </div>
      <div>
        <IconFrameE variant="gradient-border-dark">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameE>
      </div>
      <div>
        <IconFrameE variant="gradient-border-dark" rounded="full" hoverAnimation="shadow">
          <LightBulbIcon style={{ width: "2rem" }} />
        </IconFrameE>
      </div>
    </div>
  );
}

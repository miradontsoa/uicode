import CardF from "./card-f";

import { ArrowLongRightIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-lg mx-auto">
      <div>
        <CardF
          href="#"
          title={"My Playlist"}
          icon={<PlayCircleIcon  />}
          viewText={"View details"}
          viewIcon={<ArrowLongRightIcon className="w-7--" />}
          aspect={"square"}
          variant="gradient-orange"
        >
          <p>This is an useful and important feature</p>
        </CardF>
      </div>
      <div>
        <CardF
          aspect={"square"}
          viewText={"Play now"}
          imageSrc="/placeholder/img-square-9.jpg"
          icon={<PlayCircleIcon className="w-32" />}
          type={"button"}
          horizontalAlign={"center"}
          verticalAlign={"center"}
        />
      </div>
    </div>
  );
}

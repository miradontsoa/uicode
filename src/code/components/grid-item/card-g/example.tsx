import CardG from "./card-g";

import { ArrowLongRightIcon, PlayCircleIcon, HomeIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-lg mx-auto">
      <div>
        <CardG
          href="#"
          title={"My Playlist"}
          icon={<PlayCircleIcon  />}
          viewText={"View details"}
          viewIcon={<ArrowLongRightIcon className="w-7--" />}
          aspect={"square"}
          variant="gradient-orange"
        >
          <p>This is an useful and important feature</p>
        </CardG>
      </div>
      <div>
        <CardG
          aspect={"square"}
          viewText={"Home Screen"}
          imageSrc="/placeholder/img-square-9.jpg"
          icon={<HomeIcon className="w-32" />}
          type={"button"}
          verticalAlign="center"
          horizontalAlign="center"
        />
      </div>
    </div>
  );
}

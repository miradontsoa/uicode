import CardC from "./card-c";

import {
  ArrowLongRightIcon,
  EllipsisHorizontalCircleIcon,
  HeartIcon,
  PlayIcon
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <CardC
          imageSrc="/placeholder/img-portrait-5.jpg"
          href="#"
          title={"Un élément unique"}
          description={"Ceci est différent"}
          viewIcon={<ArrowLongRightIcon />}
          actionIcon={<EllipsisHorizontalCircleIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
      <div>
        <CardC
          imageSrc="/placeholder/img-portrait-4.jpg"
          href="#"
          title={"Lamp picture"}
          description={"An amazing product"}
          variant="dark"
          viewIcon={<PlayIcon className="w-6" />}
          actionIcon={<HeartIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
    </div>
  );
}

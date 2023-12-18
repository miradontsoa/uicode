import CardB from "./card-b";

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
        <CardB
          imageSrc="/placeholder/img-portrait-2.jpg"
          href="#"
          title={"Un élément unique"}
          description={"Ceci est différent"}
          viewIcon={<ArrowLongRightIcon />}
          actionIcon={<EllipsisHorizontalCircleIcon className="w-8"/>}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
      <div>
        <CardB
          imageSrc="/placeholder/img-portrait-1.jpg"
          href="#"
          title={"Easy chair"}
          description={"An amazing product"}
          variant="dark"
          viewIcon={<PlayIcon className="w-6" />}
          actionIcon={<HeartIcon  className="w-6"/>}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
    </div>
  );
}

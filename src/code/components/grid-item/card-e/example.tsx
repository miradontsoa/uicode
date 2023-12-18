import CardE from "./card-e";

import {
  ArrowLongRightIcon,
  EllipsisHorizontalCircleIcon,
  HeartIcon,
  PlayCircleIcon
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <CardE
          imageSrc="/placeholder/img-square-9.jpg"
          href="#"
          title={"Un élément unique"}
          description={"Ceci est différent"}
          viewIcon={<PlayCircleIcon className="w-7" />}
          actionIcon={<EllipsisHorizontalCircleIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
      <div>
        <CardE
          imageSrc="/placeholder/img-square-4.jpg"
          href="#"
          title={"Lemon picture"}
          description={<p>An amazing product</p>}
          variant="dark"
          viewIcon={<ArrowLongRightIcon className="w-6" />}
          actionIcon={<HeartIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
    </div>
  );
}

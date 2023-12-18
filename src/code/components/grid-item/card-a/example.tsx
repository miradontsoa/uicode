import CardA from "./card-a";

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
        <CardA
          imageSrc="/placeholder/img-square-8.jpg"
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
        <CardA
          imageSrc="/placeholder/img-square-7.jpg"
          href="#"
          title={"Lemon picture"}
          description={<p>An amazing product</p>}
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

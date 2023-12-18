import CardD from "./card-d";

import {
  ArrowLongRightIcon,
  EllipsisHorizontalCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <CardD
          imageSrc="/placeholder/img-portrait-5.jpg"
          href="#"
          title={"Lollipop "}
          description={"Pink, sweet and tasty"}
          viewIcon={<ArrowLongRightIcon />}
          actionIcon={<EllipsisHorizontalCircleIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
      <div>
        <CardD
          imageSrc="/placeholder/img-portrait-3.jpg"
          href="#"
          title={"Un élément unique"}
          description={"Ceci est différent"}
          variant="dark"
          viewIcon={<ArrowLongRightIcon />}
          actionIcon={<PlayCircleIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
    </div>
  );
}

import ListItemA from "./list-item-a";

import {
  EllipsisHorizontalCircleIcon,
  EllipsisVerticalIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <ListItemA
          imageSrc="/placeholder/img-square-9.jpg"
          href="#"
          title={"Ecouteur Bits"}
          description={"This product has a cool design and is made for you"}
          actionIcon={<PlayCircleIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
      <div>
        <ListItemA
          imageSrc="/placeholder/img-square-7.jpg"
          href="#"
          title={"Lemon picture"}
          description={"This yellow fruit is healthy and has a good taste"}
          variant="simple"
          imageRounded="full"
          actionIcon={<EllipsisVerticalIcon className="w-6"/>}
          onClickAction={() => {
            console.log("Action...");
          }}
        />
      </div>
    </div>
  );
}

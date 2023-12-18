import LocationItemA from "./location-item-a";

import {
  ClockIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <LocationItemA
          imageSrc="/placeholder/img-square-10.jpg"
          href="#"
          title={
            <>
              Le Café du matin
            </>
          }
          description={"The best coffee bar in town"}
          actionIcon={<HeartIcon />}
          onClickAction={() => {
            console.log("Action...");
          }}
          details={[
            { icon: <MapPinIcon />, title: "South, Paris" },
            { icon: <ClockIcon />, title: "6AM - 6PM" },
          ]}
        />
      </div>
      <div>
        <LocationItemA
          imageSrc="/placeholder/img-food-square-1.jpg"
          href="#"
          title={"Burger Frites"}
          description={"This burger is healthy and has a good taste"}
          variant="simple"
          imageRounded="small"
          actionIcon={<EllipsisVerticalIcon className="w-6" />}
          onClickAction={() => {
            console.log("Action...");
          }}
          details={[
            { icon: <MapPinIcon />, title: "South, Paris" },
            { icon: <ClockIcon />, title: "6AM - 6PM" },
          ]}
        />
      </div>
    </div>
  );
}

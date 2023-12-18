import LocationItemB from "./location-item-b";

import {
  ClockIcon, HeartIcon,
  MapPinIcon, StarIcon
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <LocationItemB
          imageSrc="/placeholder/img-food-landscape-5.jpg"
          href="#"
          title={"Le Café du matin"}
          description={"The best coffee in town"}
          actionIcon={<HeartIcon className="w-6" />}
          onClickAction={() => {
            console.log("Action...");
          }}
          ratingIcon={<StarIcon />}
          ratingScore={"4.8"}
          ratingComment="(50 reviews)"
          footerLeftActions={[{ icon: <MapPinIcon />, title: "South, Paris" }]}
          footerRightActions={[{ icon: <ClockIcon />, title: "6AM - 6PM" }]}
        />
      </div>
      <div>
        <LocationItemB
          imageSrc="/placeholder/img-food-landscape-1.jpg"
          href="#"
          title={"Burger Prince"}
          description={"The best burger in town"}
          actionIcon={<HeartIcon className="w-6" />}
          onClickAction={() => {
            console.log("Action...");
          }}
          imageRounded="small"
          ratingIcon={<StarIcon />}
          ratingScore={"4.8"}
          ratingComment="(50 reviews)"
          footerLeftActions={[{ icon: <MapPinIcon />, title: "South, Paris" }]}
          footerRightActions={[{ icon: <ClockIcon />, title: "6AM - 6PM" }]}
          variant="simple"
        />
      </div>
    </div>
  );
}

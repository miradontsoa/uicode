import RealEstateC from "./real-estate-c";

import {
  ArrowLongRightIcon, BuildingOfficeIcon,
  CameraIcon, HeartIcon,
  HomeModernIcon,
  MapIcon,
  MapPinIcon,
  StarIcon
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-1 grid gap-4 max-w-sm mx-auto">
      <div>
        <RealEstateC
          imageSrc="/placeholder/img-location-square-1.jpg"
          imageText="Trending"
          href="#"
          price={"$1500/Month"}
          title={"La Residence Alpha"}
          description={"Apartment - 3 days ago"}
          location="South, Paris"
          locationIcon={<MapPinIcon />}
          roomsInformation="3 Bedrooms - 2 Baths - 1350 sqft"
          roomsInformationIcon={<HomeModernIcon />}
          buildingInformation="Free Parking"
          buildingInformationIcon={<BuildingOfficeIcon />}
          rating={"4.8 (50 reviews)"}
          ratingIcon={<StarIcon />}
          footerLeftDetails={[
            {
              icon: <ArrowLongRightIcon />,
              title: "Details",
              showTitle: true,
              iconPosition: "right"
            },
          ]}
          footerRightDetails={[
            { icon: <MapIcon />, title: "View on Map" },
            { icon: <CameraIcon />, title: "View Pictures" },
            { icon: <HeartIcon />, title: "Add to Favorite" },
          ]}
        />
      </div>
      <div>
      <RealEstateC
          imageSrc="/placeholder/img-location-square-1.jpg"
          imageText="Trending"
          href="#"
          price={"$1500/Month"}
          title={"La Residence Alpha"}
          description={"Apartment - 3 days ago"}
          location="South, Paris"
          locationIcon={<MapPinIcon />}
          roomsInformation="3 Bedrooms - 2 Baths - 1350 sqft"
          roomsInformationIcon={<HomeModernIcon />}
          buildingInformation="Free Parking"
          buildingInformationIcon={<BuildingOfficeIcon />}
          rating={"4.8 (50 reviews)"}
          ratingIcon={<StarIcon />}
          footerLeftDetails={[
            {
              icon: <ArrowLongRightIcon />,
              title: "Details",
              showTitle: true,
              iconPosition: "right"
            },
          ]}
          footerRightDetails={[
            { icon: <MapIcon />, title: "View on Map" },
            { icon: <CameraIcon />, title: "View Pictures" },
            { icon: <HeartIcon />, title: "Add to Favorite" },
          ]}
          variant="simple"
        />
      </div>
    </div>
  );
}

import RealEstateB from "./real-estate-b";

import {
  BuildingOfficeIcon,
  CameraIcon, HeartIcon,
  HomeModernIcon,
  MapIcon,
  MapPinIcon,
  StarIcon
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <RealEstateB
          imageSrc="/placeholder/img-location-landscape-1.jpg"
          imageText="3 Days ago"
          href="#"
          price={"$1500/Monthly"}
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
          actions={[
            { icon: <MapIcon />, title: "View on Map" },
            { icon: <CameraIcon />, title: "View Pictures" },
            { icon: <HeartIcon />, title: "Add to Favorite" },
          ]}
        />
      </div>
      <div>
      <RealEstateB
          imageSrc="/placeholder/img-location-landscape-1.jpg"
          imageText="3 Days ago"
          href="#"
          price={"$1500/Monthly"}
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
          actions={[
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

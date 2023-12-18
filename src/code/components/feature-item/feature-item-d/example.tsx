import {
  ChartBarIcon,
  SwatchIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import FeatureItemD from "./feature-item-d";

export default function Example() {
  return (
    <div className="grid gap-4 max-w-xl mx-auto">
      <div>
        <FeatureItemD
          title={"Cool Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<SwatchIcon className="w-12" />}
          imageSrc="/placeholder/img-portrait-1.jpg"
          secondaryIcon={<h4 className="mb-0 text-8xl">01</h4>}
        />
      </div>
      <div>
        <FeatureItemD
          title={"Premium Design"}
          subTitle={"Feature"}
          description={"This is made out of metal or a super strong structure"}
          secondaryIcon={<SwatchIcon className="w-20" />}
          imageSrc="/placeholder/img-portrait-1.jpg"
          rounded="medium"
          imageRounded="small"
          imageAspect="portrait"
        />
      </div>
      <div>
        <FeatureItemD
          title={"Unique Feature"}
          href="#"
          description={"This is made out of metal or a super strong structure"}
          icon={<ViewfinderCircleIcon className="w-12" />}
          imageSrc="/placeholder/img-portrait-1.jpg"
          imageRounded="medium"
          variant="blue"
          rounded="large"
          imageAspect="square"
        />
      </div>
      <div>
        <FeatureItemD
          title={"Unique Design"}
          subTitle={"Feature"}
          description={"This is made out of metal or a super strong structure"}
          imageSrc="/placeholder/img-portrait-1.jpg"
          imageRounded="medium"
          variant="blue-white"
          rounded="large"
          alignment="center"
        />
      </div>
      <div>
        <FeatureItemD
          title={"Advanced Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ChartBarIcon className="w-12" />}
          imageSrc="/placeholder/img-portrait-1.jpg"
          variant="blue-simple"
          alignment="center"
        />
      </div>
      <div>
        <FeatureItemD
          title={"Advanced Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ChartBarIcon className="w-12" />}
          secondaryIcon={<SwatchIcon className="w-20" />}
          imageSrc="/placeholder/img-portrait-1.jpg"
          variant="simple"
          alignment="bottom"
        />
      </div>
    </div>
  );
}

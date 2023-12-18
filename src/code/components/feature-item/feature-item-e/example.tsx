import { SwatchIcon, ViewfinderCircleIcon } from "@heroicons/react/24/solid";
import FeatureItemE from "./feature-item-e";

export default function Example() {
  return (
    <div className="grid gap-4 max-w-xl mx-auto">
      <div>
        <FeatureItemE
          title={"Cool Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<SwatchIcon className="w-12" />}
          imageSrc="/placeholder/img-landscape-1.jpg"
          secondaryIcon={<h4 className="mb-0 text-8xl">01</h4>}
          variant="yellow-dark"
          aspect="landscape"
        />
      </div>
      <div>
        <FeatureItemE
          title={"Premium Design"}
          subTitle={"Feature"}
          description={"This is made out of metal or a super strong structure"}
          secondaryIcon={<SwatchIcon className="w-20" />}
          imageSrc="/placeholder/img-landscape-2.jpg"
          rounded="medium"
          variant="white"
          aspect="landscape"
        />
      </div>
      <div className="md:grid-cols-2 grid gap-4 mx-auto">
        <div>
          <FeatureItemE
            title={"Unique Feature"}
            href="#"
            description={
              "This is made out of metal or a super strong structure"
            }
            icon={<ViewfinderCircleIcon className="w-12" />}
            variant="blue"
            rounded="large"
            aspect="square"
          />
        </div>
        <div>
          <FeatureItemE
            title={"Unique Feature"}
            href="#"
            description={
              "This is made out of metal or a super strong structure"
            }
            icon={<ViewfinderCircleIcon className="w-12" />}
            imageSrc="/placeholder/img-square-4.jpg"
            variant="yellow-dark"
            rounded="large"
            aspect="square"
            shadow="medium"
          />
        </div>
      </div>
    </div>
  );
}

import {
  ChartBarIcon,
  SwatchIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import FeatureItemA from "./feature-item-a";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <FeatureItemA
          href="#"
          title={"Cool Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<SwatchIcon className="w-12" />}
          secondaryIcon={<h4 className="mb-0 text-8xl">01</h4>}
        />
      </div>
      <div>
        <FeatureItemA
          title={"Premium Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<h4 className="mb-0 text-5xl">01</h4>}
          secondaryIcon={<SwatchIcon className="w-20" />}
          rounded="none"
          variant="red"
        />
      </div>
      <div>
        <FeatureItemA
          title={"Unique Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ViewfinderCircleIcon className="w-12" />}
          variant="blue"
          rounded="large"
        />
      </div>
      <div>
        <FeatureItemA
          title={"Unique Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ViewfinderCircleIcon className="w-12" />}
          variant="blue-white"
          rounded="large"
        />
      </div>
      <div>
        <FeatureItemA
          title={"Advanced Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ChartBarIcon className="w-12" />}
          variant="blue-simple"
        />
      </div>
      <div>
        <FeatureItemA
          title={"Advanced Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ChartBarIcon className="w-12" />}
          variant="simple"
        />
      </div>
    </div>
  );
}

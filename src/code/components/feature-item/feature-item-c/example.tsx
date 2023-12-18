import {
  ChartBarIcon,
  SwatchIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import FeatureItemC from "./feature-item-c";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <FeatureItemC
          href="#"
          title={"Cool Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<SwatchIcon className="w-12" />}
          secondaryIcon={<h4 className="mb-0 text-8xl">01</h4>}
        />
      </div>
      <div>
        <FeatureItemC
          title={"Premium Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<h4 className="mb-0 text-5xl">01</h4>}
          secondaryIcon={<SwatchIcon className="w-20" />}
          rounded="none"
          variant="red"
        />
      </div>
      <div>
        <FeatureItemC
          title={"Unique Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ViewfinderCircleIcon className="w-12" />}
          variant="blue"
          rounded="large"
        />
      </div>
      <div>
        <FeatureItemC
          title={"Unique Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ViewfinderCircleIcon className="w-12" />}
          variant="blue-white"
          rounded="large"
          shadow="medium"
        />
      </div>
      <div>
        <FeatureItemC
          title={"Advanced Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ChartBarIcon className="w-12" />}
          variant="blue-simple"
        />
      </div>
      <div>
        <FeatureItemC
          title={"Advanced Feature"}
          description={"This is made out of metal or a super strong structure"}
          icon={<ChartBarIcon className="w-12" />}
          variant="simple"
        />
      </div>
    </div>
  );
}

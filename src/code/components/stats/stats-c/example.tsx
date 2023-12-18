import StatsC from "./stats-c";

import {
  ShoppingBagIcon,
  EllipsisHorizontalCircleIcon,
  InformationCircleIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-2 grid gap-4 md:max-w-lg xl:max-w-xl mx-auto">
      <div>
        <StatsC
          icon={<ShoppingBagIcon />}
          aspect={"square"}
          variant="gradient-orange"
          rounded="large"
          footerLeftElement={<p>This month</p>}
          footerRightElement={
            <p className="flex">
              <ArrowTrendingUpIcon className="w-5 mr-2" />
              <span>+75%</span>
            </p>
          }
          actions={[
            {
              icon: <EllipsisHorizontalCircleIcon />,
              title: "Settings",
              showTitle: false,
              onClick: () => {
                console.log("Details action");
              },
            },
          ]}
        >
          <h5>Revenue</h5>
          <h3 className="text-4xl font-semibold">$245k</h3>
        </StatsC>
      </div>
      <div>
        <StatsC
          icon={<ShoppingBagIcon />}
          aspect={"square"}
          horizontalAlign={"left"}
          footerLeftElement={<p>This month</p>}
          footerRightElement={
            <p className="flex">
              <ArrowTrendingUpIcon className="w-5 mr-2" />
              <span>+75%</span>
            </p>
          }
          actions={[
            {
              icon: <InformationCircleIcon />,
              title: "Information",
              showTitle: false,
              onClick: () => {
                console.log("Details action");
              },
            },
            {
              icon: <EllipsisHorizontalCircleIcon />,
              title: "Settings",
              showTitle: false,
              onClick: () => {
                console.log("Details action");
              },
            },
          ]}
        >
          <h5>Revenue</h5>
          <h3 className="text-4xl font-semibold">$245k</h3>
        </StatsC>
      </div>

      <div>
        <StatsC
          icon={<ShoppingBagIcon />}
          footerLeftElement={
            <p className="flex text-green-900 bg-green-200 px-2 rounded-lg">
              <ArrowTrendingUpIcon className="w-5 mr-2" />
              <span>+75%</span>
            </p>
          }
          actions={[
            {
              icon: <EllipsisHorizontalCircleIcon />,
              title: "Settings",
              showTitle: false,
              onClick: () => {
                console.log("Details action");
              },
            },
          ]}
        >
          <h5>Revenue</h5>
          <h3 className="text-4xl font-semibold">$245k</h3>
        </StatsC>
      </div>
      <div>
        <StatsC
          icon={<ShoppingBagIcon />}
          variant={"gradient-blue"}
          horizontalAlign={"end"}
          footerRightElement={
            <p className="flex">
              <ArrowTrendingUpIcon className="w-5 mr-2" />
              <span>+75%</span>
            </p>
          }
          actions={[
            {
              icon: <InformationCircleIcon />,
              title: "Information",
              showTitle: false,
              onClick: () => {
                console.log("Details action");
              },
            },
            {
              icon: <EllipsisHorizontalCircleIcon />,
              title: "Settings",
              showTitle: false,
              onClick: () => {
                console.log("Details action");
              },
            },
          ]}
        >
          <h5>Revenue</h5>
          <h3 className="text-4xl font-semibold">$245k</h3>
        </StatsC>
      </div>
    </div>
  );
}

import StatsA from "./stats-a";

import {
  ShoppingBagIcon,
  EllipsisHorizontalCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-2 grid gap-4 md:max-w-lg xl:max-w-xl mx-auto">
      <div>
        <StatsA
          title={"$245k"}
          icon={<ShoppingBagIcon />}
          aspect={"square"}
          variant="gradient-orange"
          rounded="large"
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
          <p>Revenue</p>
        </StatsA>
      </div>
      <div>
        <StatsA
          title={"$245k"}
          icon={<ShoppingBagIcon />}
          aspect={"square"}
          horizontalAlign={"left"}
          verticalAlign={"bottom"}
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
          <p>Revenue</p>
        </StatsA>
      </div>

      <div>
        <StatsA
          title={"$245k"}
          icon={<ShoppingBagIcon />}
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
          <p>Revenue</p>
        </StatsA>
      </div>
      <div>
        <StatsA
          title={"$245k"}
          icon={<ShoppingBagIcon />}
          variant={"gradient-blue"}
          horizontalAlign={"start"}
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
          <p>Revenue</p>
        </StatsA>
      </div>
    </div>
  );
}

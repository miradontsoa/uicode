import StatsB from "./stats-b";

import {
  ShoppingBagIcon,
  EllipsisHorizontalCircleIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-2 grid gap-4 md:max-w-lg xl:max-w-xl mx-auto">
      <div>
        <StatsB
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
          <h5>Revenue</h5>
          <h3 className="text-4xl font-bold">$245k</h3>
          <p>Up to 75% from last year</p>
        </StatsB>
      </div>
      <div>
        <StatsB
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
          <UserCircleIcon className="w-16" />
          <h3 className="text-4xl font-bold">+245</h3>
          <h5>New customers</h5>
          <p>Up to 75% from last year</p>
        </StatsB>
      </div>

      <div>
        <StatsB
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
          <h3 className="text-4xl font-bold">$245k</h3>
          <p>Up to 75% from last year</p>
        </StatsB>
      </div>
      <div>
        <StatsB
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
          <h5>Customers</h5>
          <h3 className="text-4xl font-bold">+245</h3>
          <p>Up to 75% from last year</p>
        </StatsB>
      </div>
    </div>
  );
}

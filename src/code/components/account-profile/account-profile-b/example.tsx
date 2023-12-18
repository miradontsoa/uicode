import AccountProfileB from "./account-profile-b";

import {
  ArrowRightOnRectangleIcon, ChevronUpIcon,
  Cog6ToothIcon, InformationCircleIcon, XMarkIcon
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <AccountProfileB
          imageSrc="/placeholder/img-person-square-2.jpg"
          title={"John Wilson"}
          description={"Administrator"}
          imageRounded="full"
          actionTopIcon={<ChevronUpIcon className="w-6" />}
          onClickActionTop={() => {
            console.log("Close action ...");
          }}
          footerLeftActions={[
            {
              icon: <Cog6ToothIcon />,
              title: "Settings",
              showTitle: true,
              onClick: () => {
                console.log("Details action");
              },
            },
          ]}
          footerRightActions={[
            {
              icon: <ArrowRightOnRectangleIcon />,
              title: "Log out",
              showTitle: true,

              onClick: () => {
                console.log("Previous action");
              },
            },
          ]}
        ></AccountProfileB>
      </div> 


      <div>
        <AccountProfileB
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Peterson"}
          description={"Content Manager"}
          imageRounded="full"
          actionTopIcon={<XMarkIcon className="w-6" />}
          onClickActionTop={() => {
            console.log("Close action ...");
          }}
          footerLeftActions={[
            {
              icon: <Cog6ToothIcon />,
              title: "Settings",
              showTitle: true,
              onClick: () => {
                console.log("Details action");
              },
            },
            {
              icon: <InformationCircleIcon />,
              title: "Help",
              showTitle: true,
              onClick: () => {
                console.log("Details action");
              },
            },
          ]}
          footerRightActions={[
            {
              icon: <ArrowRightOnRectangleIcon />,
              title: "Log out",
              showTitle: true,

              onClick: () => {
                console.log("Previous action");
              },
            },
          ]}
        >This is an additional content</AccountProfileB>
      </div> 
    </div>
  );
}

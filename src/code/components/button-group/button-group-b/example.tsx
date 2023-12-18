import {
  ArrowRightOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  MinusCircleIcon,
  PlayIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ButtonGroupB from "./button-group-b";

export default function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p>Group and button color</p>
        <div>
          <ButtonGroupB
            variant="default"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Settings",
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                icon: <InformationCircleIcon/>,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            variant="default"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Settings",
                iconOnly: true,
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                icon: <InformationCircleIcon/>,
                iconOnly: true,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                iconOnly: true,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            variant="light-opaque"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Settings",
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                icon: <InformationCircleIcon/>,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            variant="blue"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Settings",
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                icon: <InformationCircleIcon/>,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            variant="default"
            buttons={[
              {
                icon: <ChevronDoubleLeftIcon/>,
                content: "Previous",
                href:"#"
              },
              {
                content: "1 of 10",
                type: "static",
              },
              {
                icon: <ChevronDoubleRightIcon/>,
                content: "Next",
                href: "#",
                iconPosition: "after-text",
              },
            ]}
          />
        </div>

        <p>Icon only</p>
        <div>
          <ButtonGroupB
            rounded="small"
            variant="light"
            buttons={[
              {
                icon: <MinusCircleIcon/>,
                iconOnly: true,
                onClick: () => {
                  setCount(count - 1);
                },
              },
              {
                content: `${count}`,
                type: "static",
                className: "w-14",
              },
              {
                icon: <PlusCircleIcon/>,
                iconOnly: true,
                onClick: () => {
                  setCount(count + 1);
                },
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            rounded="small"
            variant="dark-opaque"
            buttons={[
              {
                icon: <ChevronDoubleLeftIcon/>,
                href: "#",
                iconOnly: true,
              },
              {
                icon: <PlayIcon/>,
                href: "#",
                iconOnly: true,
              },
              {
                icon: <ChevronDoubleRightIcon/>,
                href: "#",
                iconOnly: true,
              },
            ]}
          />
        </div>

        <p>Size</p>
        <div>
          <ButtonGroupB
            size="x-small"
            rounded="small"
            variant="default"
            buttons={[
              {
                icon: <Cog6ToothIcon className="w-4" />,
                content: "X Small",
                href: "#",
              },
              {
                icon: <InformationCircleIcon className="w-4" />,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon className="w-4" />,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            size="small"
            rounded="small"
            variant="default"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Small",
                href: "#",
              },
              {
                icon: <InformationCircleIcon/>,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            size="medium"
            variant="default"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Medium",
                href: "#",
              },
              {
                icon: <InformationCircleIcon/>,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupB
            size="large"
            variant="default"
            buttons={[
              {
                icon: <Cog6ToothIcon/>,
                content: "Large",
                href: "#",
              },
              {
                icon: <InformationCircleIcon/>,
                content: "Help",
                href: "#",
              },
              {
                icon: <ArrowRightOnRectangleIcon/>,
                content: "Log out",
                href: "#",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

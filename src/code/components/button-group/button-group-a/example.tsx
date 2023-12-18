import {
  ArrowUpRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ListBulletIcon,
  MinusCircleIcon,
  PlayIcon,
  PlusCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ButtonGroupA from "./button-group-a";

export default function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p>Group and button color</p>
        <div>
          <ButtonGroupA
            width="fit"
            variant="blue"
            buttons={[
              {
                content: "Trending",
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                content: "Favorite",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            width="fit"
            variant="blue"
            buttons={[
              {
                content: "Trending",
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                content: "Favorite",
                variant: "light-blue",
                href: "#",
              },
              {
                content: "All items",
                variant: "light-blue",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            width="fit"
            variant="blue"
            buttons={[
              {
                content: "Trending",
                href: "#",
                variant: "gradient",
              },
              {
                content: "Favorite",
                variant: "light-blue",
                href: "#",
              },
              {
                content: "All items",
                variant: "light-blue",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            width="fit"
            variant="red"
            buttons={[
              {
                content: "Trending",
                type: "button",
                onClick: () => {
                  console.log("Button Clicked");
                },
              },
              {
                content: "Favorite",
                variant: "light-red",
                href: "#",
              },
              {
                content: "All items",
                variant: "light-red",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            width="fit"
            variant="light"
            buttons={[
              {
                content: "Trending",
                href: "#",
              },
              {
                content: "Favorite",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            width="fit"
            variant="dark"
            buttons={[
              {
                content: "Trending",
                href: "#",
              },
              {
                content: "Favorite",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>

        <p>Border</p>
        <div>
          <ButtonGroupA
            variant="blue"
            border="medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                type: "button",
              },
              {
                content: "All items",
                type: "button",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            variant="light-blue"
            border="medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                type: "button",
              },
              {
                content: "All items",
                type: "button",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            variant="light-red"
            border="medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
                variant: "red",
              },
              {
                content: "Favorite",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>

        <div>
          <ButtonGroupA
            variant="light"
            border="thin"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>

        <div>
          <ButtonGroupA
            variant="dark"
            border="medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>

        <p>Shadow</p>
        <div>
          <ButtonGroupA
            variant="blue"
            shadow="flat-medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                type: "button",
              },
              {
                content: "All items",
                type: "button",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            variant="light-blue"
            shadow="medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                type: "button",
              },
              {
                content: "All items",
                type: "button",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            variant="light-blue"
            shadow="flat-medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                type: "button",
              },
              {
                content: "All items",
                type: "button",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            variant="red"
            shadow="medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                variant: "light-red",
                href: "#",
              },
              {
                content: "All items",
                variant: "light-red",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            variant="red"
            shadow="flat-medium"
            buttons={[
              {
                content: "Trending",
                type: "button",
              },
              {
                content: "Favorite",
                variant: "light-red",
                href: "#",
              },
              {
                content: "All items",
                variant: "light-red",
                href: "#",
              },
            ]}
          />
        </div>

        <p>With icon</p>

        <div>
          <ButtonGroupA
            width="fit"
            variant="blue"
            buttons={[
              {
                icon: <ArrowUpRightIcon />,
                content: "Trending",
                href: "#",
              },
              {
                icon: <StarIcon />,
                content: "Favorite",
                href: "#",
              },
              {
                icon: <ListBulletIcon />,
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            width="fit"
            variant="blue"
            buttons={[
              {
                icon: <ArrowUpRightIcon />,
                content: "Trending",
                iconPosition: "after-text",
                href: "#",
              },
              {
                icon: <StarIcon />,
                content: "Favorite",
                iconPosition: "after-text",
                href: "#",
              },
              {
                icon: <ListBulletIcon />,
                content: "All items",
                iconPosition: "after-text",
                href: "#",
              },
            ]}
          />
        </div>

        <p>Icon only</p>
        <div>
          <ButtonGroupA
            rounded="small"
            width="fit"
            variant="light"
            buttons={[
              {
                icon: <MinusCircleIcon className="w-5" />,
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
                icon: <PlusCircleIcon className="w-5" />,
                iconOnly: true,
                onClick: () => {
                  setCount(count + 1);
                },
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            rounded="small"
            width="fit"
            variant="dark"
            buttons={[
              {
                icon: <ChevronDoubleLeftIcon className="w-5" />,
                href: "#",
                iconOnly: true,
              },
              {
                icon: <PlayIcon className="w-5" />,
                href: "#",
                iconOnly: true,
              },
              {
                icon: <ChevronDoubleRightIcon className="w-5" />,
                href: "#",
                iconOnly: true,
              },
            ]}
          />
        </div>
        <p>Size</p>
        <div>
          <ButtonGroupA
            size="x-small"
            rounded="small"
            variant="default"
            buttons={[
              {
                content: "X Small",
                href: "#",
              },
              {
                icon: <StarIcon />,
                content: "Trending",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            size="small"
            rounded="small"
            variant="default"
            buttons={[
              {
                content: "Small",
                href: "#",
              },
              {
                icon: <StarIcon />,
                content: "Trending",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            size="medium"
            variant="default"
            buttons={[
              {
                content: "Medium",
                href: "#",
              },
              {
                icon: <StarIcon />,
                content: "Trending",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ButtonGroupA
            size="large"
            variant="default"
            buttons={[
              {
                content: "Large",
                href: "#",
              },
              {
                icon: <StarIcon />,
                content: "Trending",
                href: "#",
              },
              {
                content: "All items",
                href: "#",
              },
            ]}
          />
        </div>

      </div>
    </div>
  );
}

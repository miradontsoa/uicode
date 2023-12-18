import ListItemC from "./list-item-c";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  PlayCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <ListItemC
          imageSrc="/placeholder/img-person-square-1.jpg"
          href="#"
          title={"Jane Peterson"}
          subTitle={"Product designer"}
          imageRounded="full"
          description={
            "I have been looking for the perfect product for a while. And I found this amazing item. I really think that this is what I need."
          }
          actionIcon={<EllipsisVerticalIcon className="w-6" />}
          onClickAction={() => {
            console.log("Action...");
          }}
          footerLeftActions={[
            {
              title: "Details",
              showTitle: true,
              onClick: () => {console.log("Details action")},
            },
          ]}
          footerRightActions={[
            {
              icon: <ArrowLeftCircleIcon />,
              title: "Previous",
              onClick: () => {
                console.log("Previous action");
              },
            },
            {
              icon: <PlayCircleIcon />,
              title: "Play",
              onClick: () => {
                console.log("Play action");
              },
            },
            {
              icon: <ArrowRightCircleIcon />,
              title: "Next",
              onClick: () => {
                console.log("Next action");
              },
            },
          ]}
        />
      </div>
      <div>
        <ListItemC
          imageSrc="/placeholder/img-square-7.jpg"
          href="#"
          title={"Lemon picture"}
          subTitle={"@yellowlemon"}
          description={"This yellow fruit is healthy and has a good taste"}
          variant="simple"
          imageRounded="full"
          actionIcon={<EllipsisVerticalIcon className="w-6" />}
          onClickAction={() => {
            console.log("Action...");
          }}
          footerLeftActions={[
            {
              icon: <ChatBubbleBottomCenterTextIcon />,
              title: "Comment",
              showTitle: true,
            },
          ]}
          footerRightActions={[
            {
              title: "Like",
              icon: <HeartIcon />,
            },
            {
              title: "Share",
              icon: <ShareIcon />,
            },
          ]}
        />
      </div>
    </div>
  );
}

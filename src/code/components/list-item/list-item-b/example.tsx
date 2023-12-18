import ListItemB from "./list-item-b";

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
        <ListItemB
          imageSrc="/placeholder/img-square-9.jpg"
          href="#"
          title={"Ecouteur Bits"}
          description={"This product has a cool design and is made for you"}
          footerLeftActions={[
            {
              title: "Details",
              showTitle: true,
            },
          ]}
          footerRightActions={[
            { icon: <ArrowLeftCircleIcon />, title: "Previous" },
            { icon: <PlayCircleIcon/>, title: "Play" },
            { icon: <ArrowRightCircleIcon />, title: "Next" },
          ]}
        />
      </div>
      <div>
        <ListItemB
          imageSrc="/placeholder/img-square-7.jpg"
          href="#"
          title={"Lemon picture"}
          description={"This yellow fruit is healthy and has a good taste"}
          variant="simple"
          imageRounded="full"
          footerLeftActions={[
            {
              icon: <ChatBubbleBottomCenterTextIcon/>,
              title: "Comment",
              showTitle: true,
            },
          ]}
          footerRightActions={[
            {
              title: "Like",
              icon: <HeartIcon/>,
            },
            {
              title: "Share",
              icon: <ShareIcon/>,
            },
          ]}
        />
      </div>
    </div>
  );
}

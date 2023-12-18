import {
  EllipsisHorizontalIcon
} from "@heroicons/react/24/solid";
import AvatarA from "../avatar-a/avatar-a";
import AvatarGroupA from "./avatar-group-a";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <AvatarGroupA
          avatarElements={[
            <AvatarA
              key="one"
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />,
            <AvatarA
              key="two"
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />,
            <AvatarA
              key="three"
              imageSrc="/placeholder/img-person-square-1.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />,
          ]}
        >
          <span>
            <EllipsisHorizontalIcon className="w-6" />
          </span>
        </AvatarGroupA>

        <AvatarGroupA
          direction={"to-left"}
          avatarElements={[
            <AvatarA
              key="one"
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />,
            <AvatarA
              key="two"
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />,
            <AvatarA
              key="three"
              imageSrc="/placeholder/img-person-square-1.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />,
          ]}
        >
          <span>
            <EllipsisHorizontalIcon className="w-6" />
          </span>
        </AvatarGroupA>

        <AvatarGroupA
          avatarElements={[
            <AvatarA
              key="one"
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />,
            <AvatarA
              key="two"
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />,
            <AvatarA
              key="three"
              imageSrc="/placeholder/img-person-square-1.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />,
          ]}
        >
          <span>+2</span>
        </AvatarGroupA>
      </div>
    </div>
  );
}

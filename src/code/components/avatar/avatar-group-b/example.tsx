import AvatarA from "../avatar-a/avatar-a";
import AvatarGroupB from "./avatar-group-b";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <AvatarGroupB
          avatar1Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />
          }
          avatar2Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />
          }
        ></AvatarGroupB>
        <AvatarGroupB
          size="small"
          avatar1Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />
          }
          avatar2Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />
          }
        >+2</AvatarGroupB>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <AvatarGroupB
          direction={"to-left"}
          avatar1Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />
          }
          avatar2Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              borderSize="medium"
            />
          }
        ></AvatarGroupB>

        <AvatarGroupB
          direction={"to-left"}
          size="small"
          avatar1Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-2.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />
          }
          avatar2Element={
            <AvatarA
              imageSrc="/placeholder/img-person-square-3.jpg"
              title={"Jane Forester"}
              size="small"
              borderSize="medium"
            />
          }
        >+2</AvatarGroupB>
      </div>
    </div>
  );
}

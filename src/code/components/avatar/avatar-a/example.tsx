import { ArrowTrendingUpIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import AvatarA from "./avatar-a";

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"John Wilson"}
          labelColor={"green"}
          labelSize={"small"}
        ></AvatarA>
        <AvatarA
          imageSrc="/placeholder/img-person-square-2.jpg"
          title={"John Wilson"}
          labelColor={"red"}
          labelElement={<EnvelopeIcon className="w-3" />}
        ></AvatarA>
        <AvatarA title={"Unknown"} variant="blue">
          <span>ABC</span>
        </AvatarA>
        <AvatarA title={"Trends"} variant="orange">
          <span>
            <ArrowTrendingUpIcon className="w-8" />
          </span>
        </AvatarA>
      </div>

      {/* Border radius */}
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"small"}
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"medium"}
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"large"}
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"full"}
          borderSize= {"medium"}
          borderPosition={"inside"}
          borderColor={"green"}
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"full"}
          borderSize= {"small"}
          borderPosition={"aureole"}
          borderColor={"green"}
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"small"}
          borderSize= {"medium"}
          borderPosition={"outside"}
          borderColor={"green"}
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-1.jpg"
          title={"Jane Forester"}
          rounded={"full"}
          borderSize= {"medium"}
          borderPosition={"aureole"}
          borderColor={"gradient"}
        />
      </div>

      {/* Size */}
      <div className="flex flex-wrap gap-4 mx-auto mt-4">
        <AvatarA
          imageSrc="/placeholder/img-person-square-3.jpg"
          title={"Jane Forester"}
          size="large"
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-3.jpg"
          title={"Jane Forester"}
          size="medium"
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-3.jpg"
          title={"Jane Forester"}
          size="small"
        />
        <AvatarA
          imageSrc="/placeholder/img-person-square-3.jpg"
          title={"Jane Forester"}
          size="x-small"
        />
      </div>
    </div>
  );
}

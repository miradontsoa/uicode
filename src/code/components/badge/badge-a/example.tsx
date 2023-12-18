import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import AvatarA from "../../avatar/avatar-a/avatar-a";
import BadgeA from "./badge-a";

export default function Example() {
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        <div>
          <BadgeA>Notification</BadgeA>
        </div>
        <div>
          <BadgeA
            beforeElement={
              <AvatarA
                imageSrc="/placeholder/img-person-square-4.jpg"
                title={"John Wilson"}
                size="x-small"
              />
            }
          >
            Notification
          </BadgeA>
        </div>
        <div>
          <BadgeA closable>Notification</BadgeA>
        </div>
        <div>
          <BadgeA
            beforeElement={
              <AvatarA
                imageSrc="/placeholder/img-person-square-4.jpg"
                title={"John Wilson"}
                size="x-small"
              />
            }
            closable
          >
            Notification
          </BadgeA>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap mt-4"> 
        <div>
          <BadgeA
            size="small"
            beforeElement={
              <AvatarA
                imageSrc="/placeholder/img-person-square-4.jpg"
                title={"John Wilson"}
                size="xx-small"
              />
            }
            closable
          >
            Small
          </BadgeA>
        </div>
        <div>
          <BadgeA
            size="medium"
            beforeElement={
              <AvatarA
                imageSrc="/placeholder/img-person-square-4.jpg"
                title={"John Wilson"}
                size="x-small"
              />
            }
            closable
          >
            Medium
          </BadgeA>
        </div>
        <div>
          <BadgeA
            size="large"
            beforeElement={
              <AvatarA
                imageSrc="/placeholder/img-person-square-4.jpg"
                title={"John Wilson"}
                size="x-small"
              />
            }
            closable
          >
            Large
          </BadgeA>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap mt-4">
        <div>
          <BadgeA rounded="small">Notification</BadgeA>
        </div>
        <div>
          <BadgeA rounded="medium">Notification</BadgeA>
        </div>
        <div>
          <BadgeA rounded="full">Notification</BadgeA>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap mt-4">
        <div>
          <BadgeA>Notification</BadgeA>
        </div>
        <div>
          {/* variant="red" */}
          <BadgeA variant="red">Notification</BadgeA>
        </div>
        <div>
          {/* variant="blue" */}
          <BadgeA variant="blue">Notification</BadgeA>
        </div>
        <div>
          {/* variant="blue-translucent" with border="medium" */}
          <BadgeA variant="blue-translucent" border="medium">Notification</BadgeA>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap mt-4">
        <div>
          <BadgeA variant="red" size="small">
            5
          </BadgeA>
        </div>
        <div>
          <BadgeA size="large">Free Delivery</BadgeA>
        </div>
        <div>
          <BadgeA
            beforeElement={
              <ChatBubbleOvalLeftIcon
                style={{ width: "1rem", height: "1rem" }}
              />
            }
            rounded="medium"
            variant="blue"
            closable
          >
            New message
          </BadgeA>
        </div>
        <div>
          <BadgeA variant="blue-translucent">Verified</BadgeA>
        </div>
      </div>
    </div>
  );
}

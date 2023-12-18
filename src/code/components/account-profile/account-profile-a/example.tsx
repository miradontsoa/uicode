import { ChevronDownIcon } from "@heroicons/react/24/solid";
import AccountProfileA from "./account-profile-a";

export default function Example() {
  return (
    <div>
      <div className="flex  flex-wrap gap-4 mx-auto">
        <div>
          <AccountProfileA
            imageSrc="/placeholder/img-person-square-2.jpg"
            title={"John Wilson"}
            description={"Chief Editor"}
            actionIcon={<ChevronDownIcon />}
            onClickAction={() => {
              console.log("Action...");
            }}
          />
        </div>
        <div>
          <AccountProfileA
            imageSrc="/placeholder/img-person-square-2.jpg"
            title={"John Wilson"}
            actionIcon={<ChevronDownIcon />}
            onClickAction={() => {
              console.log("Action...");
            }}
          />
        </div>
        <div>
          <AccountProfileA
            imageSrc="/placeholder/img-person-square-2.jpg"
            imageRounded="full"
            rounded="medium"
            actionIcon={<ChevronDownIcon />}
            onClickAction={() => {
              console.log("Action...");
            }}
          />
        </div>
      </div>

      <div className="flex  flex-wrap gap-4 mx-auto mt-4">
        <div>
          <AccountProfileA
            variant="card"
            imageSrc="/placeholder/img-person-square-2.jpg"
            title={"John Wilson"}
            description={"Chief Editor"}
            actionIcon={<ChevronDownIcon />}
            onClickAction={() => {
              console.log("Action...");
            }}
          />
        </div>
        <div>
          <AccountProfileA
            variant="card"
            imageSrc="/placeholder/img-person-square-2.jpg"
            title={"John Wilson"}
            actionIcon={<ChevronDownIcon />}
            onClickAction={() => {
              console.log("Action...");
            }}
          />
        </div>
        <div>
          <AccountProfileA
            variant="card"
            imageSrc="/placeholder/img-person-square-2.jpg"
            imageRounded="full"
            rounded="medium"
            actionIcon={<ChevronDownIcon />}
            onClickAction={() => {
              console.log("Action...");
            }}
          />
        </div>
      </div>
    </div>
  );
}

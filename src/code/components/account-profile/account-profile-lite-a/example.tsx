import AccountProfileLiteA from "./account-profile-lite-a";

export default function Example() {
  return (
    <div>
      <div className="flex  flex-wrap gap-6 mx-auto">
        <div>
          <AccountProfileLiteA
            imageSrc="/placeholder/img-person-square-2.jpg"
            title={"John Wilson"}
            description={"Chief Editor"}
          />
        </div>
        <div>
          <AccountProfileLiteA
            imageSrc="/placeholder/img-person-square-2.jpg"
            title={"John Wilson"}
          />
        </div>
      </div>

    </div>
  );
}

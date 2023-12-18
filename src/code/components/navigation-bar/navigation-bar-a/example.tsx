import {
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeIcon, UserIcon
} from "@heroicons/react/24/solid";
import NavigationBarA from "./navigation-bar-a";

export default function Example() {
  return (
    <div className="max-w-sm mx-auto">
      <div>
        <NavigationBarA
          defaultActive="home"
          items={[
            { title: "Home", slug: "home", icon: <HomeIcon /> },
            { title: "Message", slug: "message", icon: <EnvelopeIcon /> },
            { title: "Contact", slug: "contact", icon: <UserIcon /> },
            { title: "Settings", slug: "settings", icon: <Cog6ToothIcon /> },
          ]}
        />
      </div>
    </div>
  );
}

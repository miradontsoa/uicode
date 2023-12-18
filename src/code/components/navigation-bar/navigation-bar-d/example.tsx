import {
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeIcon, UserIcon
} from "@heroicons/react/24/solid";
import NavigationBarD from "./navigation-bar-d";

export default function Example() {
  return (
    <div className="max-w-sm mx-auto">
      <div>
        <NavigationBarD
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

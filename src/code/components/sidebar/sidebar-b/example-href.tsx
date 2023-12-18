import {
  CodeBracketIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SidebarB from "./sidebar-b";

export default function Example() {
  return (
    <div className="mx-auto flex justify-center gap-8">
      <div style={{ height: "480px" }}>
        <SidebarB
          logo={<Logo />}
          defaultActive="home"
          navigationItems={[
            {
              title: "Home",
              slug: "home",
              icon: <HomeIcon />,
              onClick: () => {},
            },
            {
              title: "Message",
              slug: "message",
              icon: <EnvelopeIcon />,
              onClick: () => {},
            },
            {
              title: "Contact",
              slug: "contact",
              icon: <UserIcon />,
              onClick: () => {},
            },
          ]}
          footerNavigationItems={[
            {
              title: "Settings",
              slug: "settings",
              icon: <Cog6ToothIcon />,
              onClick: () => {},
            },
          ]}
        />
      </div>
      <div style={{ height: "480px" }}>
        <SidebarB
          logo={<Logo />}
          defaultActive="home"
          variant="style-a"
          navigationItems={[
            { title: "Home", slug: "home", icon: <HomeIcon />, href: "#" },
            {
              title: "Message",
              slug: "message",
              icon: <EnvelopeIcon />,
              href: "#",
            },
            {
              title: "Contact",
              slug: "contact",
              icon: <UserIcon />,
              href: "#",
            },
          ]}
          footerNavigationItems={[
            {
              title: "Settings",
              slug: "settings",
              icon: <Cog6ToothIcon />,
              href: "#",
            },
          ]}
        />
      </div>
    </div>
  );
}
function Logo({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <path
        id="logo"
        d="M1293.013,88h12.833a2.325,2.325,0,0,0,1.647-.682l0,0a2.325,2.325,0,0,0,.682-1.648V72.833a2.334,2.334,0,0,0-2.333-2.333h-2.334a2.334,2.334,0,0,0-2.333,2.333V81h-3.5V72.833a2.334,2.334,0,0,0-2.333-2.333h-2.333a2.335,2.335,0,0,0-2.333,2.333V85.666a2.326,2.326,0,0,0,.682,1.648l0,0A2.325,2.325,0,0,0,1293.013,88Zm18.667-2.333A2.334,2.334,0,0,0,1314.013,88h2.333a2.335,2.335,0,0,0,2.334-2.333V83.333A2.335,2.335,0,0,0,1316.346,81h-2.333a2.334,2.334,0,0,0-2.333,2.333ZM1316.346,60h-12.833a2.334,2.334,0,0,0-2.333,2.333v2.333A2.334,2.334,0,0,0,1303.513,67h8.167v8.167a2.334,2.334,0,0,0,2.333,2.333h2.333a2.335,2.335,0,0,0,2.334-2.333V62.333a2.327,2.327,0,0,0-.682-1.648l0,0A2.325,2.325,0,0,0,1316.346,60Z"
        transform="translate(-1290.68 -60)"
        fill="#5d04f9"
        fillRule="evenodd"
      />
    </svg>
  );
}

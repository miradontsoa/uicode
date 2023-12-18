import {
  HomeIcon,
  InformationCircleIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import BreadcrumbsA from "./breadcrumbs-a";

export default function Example() {
  return (
    <div>
      <div className="">
        <BreadcrumbsA
          items={[
            {
              slug: "home",
              title: "Home",
              icon: <HomeIcon style={{ width: "1.25em" }} />,
              iconOnly: true,
              href: "#",
            },
            {
              slug: "products",
              title: "Products",
              href: "#",
            },
            {
              slug: "clothing",
              title: "Clothing",
              href: "#",
            },
            {
              slug: "dress",
              title: "Dress",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        <BreadcrumbsA
          separator="circle"
          items={[
            {
              slug: "home",
              title: "Home",
              icon: <HomeIcon style={{ width: "1.25em" }} />,
              iconOnly: true,
              href: "#",
            },
            {
              slug: "products",
              title: "Products",
              href: "#",
            },
            {
              slug: "clothing",
              title: "Clothing",
              href: "#",
            },
            {
              slug: "dress",
              title: "Dress",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        <BreadcrumbsA
          separator="bar"
          variant="blue"
          items={[
            {
              slug: "home",
              title: "Home",
              icon: <HomeIcon style={{ width: "1.25em" }} />,
              iconOnly: true,
              href: "#",
            },
            {
              slug: "products",
              title: "Products",
              href: "#",
            },
            {
              slug: "clothing",
              title: "Clothing",
              href: "#",
            },
            {
              slug: "dress",
              title: "Dress",
            },
          ]}
        />
      </div>
      <p className="mt-4">With defined separator:</p>
      <div className="mt-4">
        <BreadcrumbsA
          separatorElement={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.126 12.8215L10.7619 8.55564C10.8366 8.48688 10.8965 8.40159 10.9376 8.30561C10.9787 8.20963 11 8.10524 11 7.9996C11 7.89396 10.9787 7.78957 10.9376 7.69359C10.8965 7.59761 10.8366 7.51231 10.7619 7.44355L6.126 3.17768C5.6835 2.77056 5 3.1081 5 3.73373V12.2667C5 12.8923 5.6835 13.2299 6.126 12.8215Z"
                fill="currentColor"
              />
            </svg>
          }
          items={[
            {
              slug: "home",
              title: "Home",
              icon: <HomeIcon style={{ width: "1.25em" }} />,
              iconOnly: true,
              href: "#",
            },
            {
              icon: <UsersIcon style={{ width: "1.25em" }} />,
              slug: "users",
              title: "Users",
              href: "#",
            },
            {
              icon: <InformationCircleIcon style={{ width: "1.25em" }} />,
              slug: "information",
              title: "Information",
              href: "#",
            },
            {
              slug: "contact",
              title: "Contact",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        <BreadcrumbsA
          separatorElement={<StarIcon className="w-2 mx-1" />}
          items={[
            {
              slug: "home",
              title: "Home",
              icon: <HomeIcon style={{ width: "1.25em" }} />,
              iconOnly: true,
              href: "#",
            },
            {
              slug: "products",
              title: "Products",
              href: "#",
            },
            {
              slug: "clothing",
              title: "Clothing",
              href: "#",
            },
            {
              slug: "dress",
              title: "Dress",
            },
          ]}
        />
      </div>
    </div>
  );
}

import TeamMemberC from "./team-member-c";

export default function Example() {
  return (
    <div className="md:grid-cols-1 grid gap-4 max-w-sm mx-auto">
      <div>
        <TeamMemberC
          imageSrc="/placeholder/img-person-square-4.jpg"
          href="#"
          title={"Josh Peterson"}
          description={"CEO - Advisor"}
          variant={"card"}
          rounded="full"
          footerSocials={[
            {
              icon: <IconTwitter />,
              title: "Settings",
              showTitle: false,
              href: "#",
            },
            {
              icon: <IconLinkedin />,
              title: "Settings",
              showTitle: false,
              href: "#",
            },
          ]}
        />
      </div>
      <div>
        <TeamMemberC
          imageSrc="/placeholder/img-person-square-1.jpg"
          href="#"
          title={"Jane Charlotte"}
          description={"CEO - Advisor"}
          rounded={"large"}
          footerSocials={[
            {
              icon: <IconTwitter />,
              title: "Settings",
              showTitle: false,
              href: "#",
            },
            {
              icon: <IconLinkedin />,
              title: "Settings",
              showTitle: false,
              href: "#",
            },
          ]}
        />
      </div>
      <div>
        <TeamMemberC
          imageSrc="/placeholder/img-person-square-4.jpg"
          href="#"
          title={"Josh Peterson"}
          description={"CEO - Advisor"}
          verticalAlign="center"
          socialsAlign="end"
          variant={"card"}
          rounded="large"
          footerSocials={[
            {
              icon: <IconTwitter />,
              title: "Settings",
              showTitle: false,
              href: "#",
            },
            {
              icon: <IconLinkedin />,
              title: "Settings",
              showTitle: false,
              href: "#",
            },
          ]}
        />
      </div>
    </div>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg
      style={{
        width: "1em",
        height: "1em",
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="56.001"
      height="56"
      viewBox="0 0 56.001 56"
    >
      <g
        id="logo-linkedin"
        transform="translate(-2512.858 -1077.5)"
        fill="currentColor"
      >
        <g id="Group_150" data-name="Group 150">
          <path
            id="Path_228"
            data-name="Path 228"
            d="M2564.38,1077.5h-46.736a4.568,4.568,0,0,0-4.785,4.361v46.84a4.928,4.928,0,0,0,4.785,4.8h46.723a4.677,4.677,0,0,0,4.493-4.8v-46.84a4.293,4.293,0,0,0-4.479-4.361Zm-34.163,46.679h-8.022v-24.944h8.022Zm-3.733-28.736h-.058a4.361,4.361,0,1,1,.058,0Zm33.053,28.736h-8.022V1110.54c0-3.268-1.168-5.5-4.07-5.5a4.387,4.387,0,0,0-4.114,2.961,5.4,5.4,0,0,0-.277,1.97v14.208h-8.023v-24.944h8.023v3.471a8.124,8.124,0,0,1,7.235-4.055c5.266,0,9.249,3.471,9.249,10.955v14.573Z"
          />
        </g>
      </g>
    </svg>
  );
}

function IconTwitter({ className }: { className?: string }) {
  return (
    <>
      <svg
        className={className}
        style={{
          width: "1em",
          height: "1em",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="48"
        viewBox="0 0 60 48"
      >
        <g
          id="logo-twitter"
          transform="translate(-162.792 -1409.502)"
          fill="currentColor"
        >
          <g id="Group_183" data-name="Group 183">
            <path
              id="Path_276"
              data-name="Path 276"
              d="M222.792,1415.19a25.249,25.249,0,0,1-7.069,1.912,12.192,12.192,0,0,0,5.416-6.7,24.718,24.718,0,0,1-7.82,2.938,12.4,12.4,0,0,0-8.988-3.838,12.209,12.209,0,0,0-12.308,12.112,11.628,11.628,0,0,0,.318,2.763,35.1,35.1,0,0,1-25.375-12.663,11.959,11.959,0,0,0-1.674,6.088,12.081,12.081,0,0,0,5.5,10.087,12.185,12.185,0,0,1-5.6-1.512v.15a12.171,12.171,0,0,0,9.875,11.875,12.578,12.578,0,0,1-3.242.425,11.827,11.827,0,0,1-2.314-.225,12.3,12.3,0,0,0,11.506,8.412,24.953,24.953,0,0,1-15.29,5.188,25.513,25.513,0,0,1-2.937-.175,34.841,34.841,0,0,0,18.842,5.475c22.67,0,35.055-18.463,35.055-34.475,0-.525-.013-1.05-.038-1.563a24.781,24.781,0,0,0,6.141-6.275Z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

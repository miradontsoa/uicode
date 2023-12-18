export default function IconMenu({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      style={{
        width: "1em",
        height: "1em",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="384"
      height="256"
      viewBox="0 0 384 256"
    >
      <g id="menu" transform="translate(-64 -128)" >
        <line
          id="Line_1"
          data-name="Line 1"
          x2="336"
          transform="translate(88 152)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          x2="336"
          transform="translate(88 256)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          x2="336"
          transform="translate(88 360)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
      </g>
    </svg>
  );
}

import ListItemApp from "@/app-components/ui/list/ListItemApp";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import Link from "next/link";

type Props = { className?: string };

export default function ListSeparator({ className }: Props) {
  return (
    <SectionA
      className={clsx("lp-section", className)}
      withXPageMargin={false}
      paddingTop={"none"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      <div
        className="opacity-1"
        style={{
          border: " none",
          height: "1.5px",
          width: "100%",
          background:
            "linear-gradient(to right, var(--primary), rgba(var(--primary-rgb), 0.0))",
        }}
      />
    </SectionA>
  );
}

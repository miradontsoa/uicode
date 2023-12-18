import { SOCIALS } from "@/const";
import Link from "next/link";
import React from "react";
import styles from "./FooterContent.module.css";

type Props = {
  withByMe?: boolean;
};

export default function FooterContent({ withByMe }: Props) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-x-4">
        <div className="footer-left mb-4 lg:mb-0">
          <div className="flex gap-6  justify-start">
            <div>
              <Link href="/support" className="btn btn-inline-a pt-0">
                <span className="text">Help</span>
              </Link>
            </div>
            <div>
              <Link href="/components" className="btn btn-inline-a pt-0">
                <span className="text">Components</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="flex gap-6  lg:justify-end">
            {/* <div>Let&apos;s connect:</div> */}
            <div>
              <Link
                href={SOCIALS.TWITTER}
                target="_blank"
                className="btn btn-inline-a pt-0"
                rel="noreferrer"
              >
                <span className="text">X (Twitter)</span>
              </Link>
            </div>
            <div>
              <Link
                href={SOCIALS.INSTAGRAM}
                target="_blank"
                className="btn btn-inline-a pt-0"
                rel="noreferrer"
              >
                <span className="text">Instagram</span>
              </Link>
            </div>
            <div>
              <Link
                href={SOCIALS.GITHUB}
                target="_blank"
                className="btn btn-inline-a pt-0"
                rel="noreferrer"
              >
                <span className="text">Github</span>
              </Link>
            </div>
            <div>
              <Link
                href={SOCIALS.LINKEDIN}
                target="_blank"
                className="btn btn-inline-a pt-0"
                rel="noreferrer"
              >
                <span className="text">Linkedin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {withByMe && (
        <>
          <hr className="opacity-20"></hr>
          <div>
            <p className={["mb-0", styles["made-by"]].join(" ")}>
              Made by{" "}
              <Link
                href={SOCIALS.TWITTER_MIRA}
                target="_blank"
                rel="noreferrer"
              >
                Mirado Andria
              </Link>
              . Do you have a question, suggestion or personalized work
              proposals?{" "}
              <Link href={SOCIALS.TWITTER_MIRA} target="_blank">
                DM me on X (Twitter)
              </Link>{" "}
              or{" "}
              <Link href={SOCIALS.LINKEDIN} target="_blank">
                on Linkedin
              </Link>
              .
            </p>
          </div>
        </>
      )}
    </div>
  );
}

// Page footer

import classNames from "classnames";
import Link from "next/link";
import SectionA from "../sections/SectionA";
import FooterContent from "./FooterContent";
import styles from "./LandingPageFooter.module.css";

export default function LandingPageFooter() {
  return (
    <SectionA contentWidth="medium">
      <footer className={classNames("footer-page", styles.footerPage)}>
        <div className="container-xl">
          <FooterContent withByMe />
        </div>
      </footer>
    </SectionA>
  );
}

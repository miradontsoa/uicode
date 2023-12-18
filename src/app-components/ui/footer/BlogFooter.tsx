import SectionPage from "@/app-components/ui/sections/SectionPage";
import { APP_INFO } from "@/constants";
import classNames from "classnames";
import MailchimpRegistration from "../form/MailchimpRegistration";
import ListSocials from "../list/ListSocials";
import styles from "./BlogFooter.module.css";

interface Props {
  id?: string;
}
export default function BlogFooter({ id }: Props) {
  return (
    <SectionPage marginTop="medium" marginBottom="small">
      <footer className="section-footer container-fluid px-0">
        <div className="footer-content ">
          <div className="row">
            <div className="col-12  d-flex d-lg-none">
              <MailchimpRegistration className="mb-5 mb-lg-0" />
            </div>
            <div className="col-12 col-md mb-5 mb-lg-0">
              <p className={classNames(styles.notes)}>
                Hi, I am Mirado Andria. Thank you for visiting my page.
                <br />
                In need of a developer or a designer? Feel free to{" "}
                <a className="btn-link" href={`mailto:${APP_INFO.EMAIL}`}>
                  send me a message
                </a>{" "}
                or reach me on{" "}
                <a
                  className="btn-link"
                  href="http://linkedin.com/in/miradontsoa"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
            <div className="col-12 col-md-auto d-flex justify-content-md-end align-items-end">
              <ListSocials />
            </div>
          </div>
        </div>
      </footer>
    </SectionPage>
  );
}

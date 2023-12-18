"use client";

import classNames from "classnames";
import { useState } from "react";
import styles from "./MailchimpRegistration.module.css";

type Props = {
  className?: string;
};
export default function MailchimpRegistration({ className }: Props) {
  const [email, setEmail] = useState("");
  const [blankField, setBlankField] = useState("");
  const action =
    "https://work.us10.list-manage.com/subscribe/post?u=e1f4da20090e7890812222d4f&amp;id=974a6a3cfc&amp;f_id=0087cae5f0";
  return (
    <>
      <div className={classNames(styles.formBox, className)}>
        {/* <!-- Begin Mailchimp Signup Form --> */}
        <div id="mc_embed_signup">
          <form
            //   action="https://work.us10.list-manage.com/subscribe/post?u=e1f4da20090e7890812222d4f&amp;id=974a6a3cfc&amp;f_id=0087cae5f0"
            action={action}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
          >
            <div id="mc_embed_signup_scroll">
              <h2 className={classNames(styles.title)}>
                Subscribe for the latest news
              </h2>
              <div
                className={classNames(
                  "indicates-required",
                  styles.indicatesRequired
                )}
              >
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL" className={classNames(styles.label)}>
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  name="EMAIL"
                  className={classNames("required email", styles.input)}
                  id="mce-EMAIL"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  //   placeholder="Email address"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div
                className={styles.hiddenField}
                style={{ position: "absolute", left: "-5000px;" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_e1f4da20090e7890812222d4f_974a6a3cfc"
                  tabIndex={-1}
                  value={blankField}
                  onChange={(e) => {
                    setBlankField(e.target.value);
                  }}
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    className={classNames("button", styles.submit)}
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                  <p
                    className={classNames("brandingLogo", styles.brandingLogo)}
                  >
                    <a
                      href="http://eepurl.com/idKAe1"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      Powered by Mailchimp
                      {/* <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /> */}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* <!--End mc_embed_signup--> */}
      </div>
    </>
  );
}

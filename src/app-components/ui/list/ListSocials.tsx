import classNames from "classnames";
import IconGithub from "../icons/IconGithub";
import IconInstagram from "../icons/IconInstagram";
import IconLinkedin from "../icons/IconLinkedin";
import IconTwitter from "../icons/IconTwitter";

type Props = {
  className?: string;
};
export default function ListSocials ({ className }: Props) {
  return (
    <nav className={classNames(className, "nav-social nav-social-a")}>
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link btn"
            href="http://github.com/miradontsoa"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <IconGithub key="github" />
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link btn"
            href="http://twitter.com/miradontsoa"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <IconTwitter key="twitter" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link btn"
            href="http://instagram.com/cutekitnet"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <IconInstagram key="instagram" />
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link btn"
            href="http://linkedin.com/in/miradontsoa"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <IconLinkedin key="linkedin" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

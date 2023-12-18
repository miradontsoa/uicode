import { Work } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function  CardWork ({ work }: { work: Work }) {
  const titleStyle: React.CSSProperties = {};
  if (work.style) {
    if (work.style.backgroundColor) {
      titleStyle.backgroundColor = work.style.backgroundColor;
    }
    if (work.style.color) {
      titleStyle.color = work.style.color;
    }
  }
  return (
    <figure className="figure-a figure-work">
      <div className="title-block" style={titleStyle}>
        <h4 className="strong title">{work.title}</h4>
      </div>
      {work.img && (
        <Image
          src={work.img}
          className="img-1 img-fluid"
          alt={work.title}
          width={320}
          height={320}
        />
      )}

      <legend>
        <h5>{work.category}</h5>
        {work.description && <p className="description ">{work.description}</p>}
        {work.url && (
          <a
            className="btn btn-line-arrow "
            href={work.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text">Discover</span>
            <span className="icon ms-3">
              <span className="icon-arrow-right"></span>
            </span>
          </a>
        )}
      </legend>
    </figure>
  );
};


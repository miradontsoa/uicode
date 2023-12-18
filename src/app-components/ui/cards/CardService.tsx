import { Service } from "@/types";

interface Props {
  service: Service;
}
export default function CardService({ service }: Props) {
  const cardStyle: React.CSSProperties = {};
  if (service.style) {
    if (service.style.backgroundColor) {
      cardStyle.backgroundColor = service.style.backgroundColor;
    }
    if (service.style.color) {
      cardStyle.color = service.style.color;
    }
  }
  return (
    <div className="card card-a px-lg-4 py-lg-4" style={cardStyle}>
      <div className="card-body">
        <div className="item-img mb-3">{service.icon}</div>
        <h4 className="mb-3">{service.title}</h4>
        {service.description && (
          <p className="mb-0 fs-default">{service.description}</p>
        )}
        {service.list && (
          <ul className="mt-3">
            {service.list.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

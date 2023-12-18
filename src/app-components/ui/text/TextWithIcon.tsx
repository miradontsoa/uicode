export default function TextWithIcon({
  children,
  iconElement,
}: {
  children: React.ReactNode;
  iconElement: React.ReactNode;
}) {
  return (
    <span className="flex items-center">
      <span className="inline-flex items-center mr-2">{iconElement}</span>
      <span className="">{children}</span>
    </span>
  );
}

import HeroMarketingB from "./hero-marketing-b";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroMarketingB />
      </div>
      <div className="">
        <HeroMarketingB variant="style-a" />
      </div>
      <div className="">
        <HeroMarketingB variant="style-b" />
      </div>
    </div>
  );
}

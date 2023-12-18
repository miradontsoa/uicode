import HeroMarketingA from "./hero-marketing-a";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroMarketingA />
      </div>
      <div className="">
        <HeroMarketingA variant="style-a" />
      </div>
      <div className="">
        <HeroMarketingA variant="style-b" />
      </div>
    </div>
  );
}

import HeroPortfolioB from "./hero-portfolio-b";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroPortfolioB />
      </div>
      <div className="">
        <HeroPortfolioB variant="style-a" />
      </div>
      <div className="">
        <HeroPortfolioB variant="style-b" />
      </div>
    </div>
  );
}

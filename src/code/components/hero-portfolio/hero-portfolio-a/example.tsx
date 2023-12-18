import HeroPortfolioA from "./hero-portfolio-a";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroPortfolioA />
      </div>
      <div className="">
        <HeroPortfolioA variant="style-a" />
      </div>
      <div className="">
        <HeroPortfolioA variant="style-b" />
      </div>
    </div>
  );
}

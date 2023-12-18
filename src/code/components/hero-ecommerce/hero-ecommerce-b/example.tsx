import HeroEcommerceB from "./hero-ecommerce-b";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroEcommerceB />
      </div>
      <div className="">
        <HeroEcommerceB variant="style-a" />
      </div>
      <div className="">
        <HeroEcommerceB variant="style-b" />
      </div>
    </div>
  );
}

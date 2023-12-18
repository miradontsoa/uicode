import HeroEcommerceA from "./hero-ecommerce-a";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroEcommerceA />
      </div>
      <div className="">
        <HeroEcommerceA variant="style-a" />
      </div>
      <div className="">
        <HeroEcommerceA variant="style-b" />
      </div>
    </div>
  );
}

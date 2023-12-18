import HeroEcommerceC from "./hero-ecommerce-c";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroEcommerceC />
      </div>
      <div className="">
        <HeroEcommerceC variant="style-a" />
      </div>
      <div className="">
        <HeroEcommerceC variant="style-b" />
      </div>
    </div>
  );
}

import HeroEcommerceE from "./hero-ecommerce-e";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroEcommerceE />
      </div>
      <div className="">
        <HeroEcommerceE variant="style-a" />
      </div>
      <div className="">
        <HeroEcommerceE variant="style-b" />
      </div>
    </div>
  );
}

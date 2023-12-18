import HeroEcommerceD from "./hero-ecommerce-d";

export default function Example() {
  return (
    <div className="grid gap-4"> 
      <div className="">
        <HeroEcommerceD />
      </div>
      <div className="">
        <HeroEcommerceD variant="style-a" />
      </div>
    </div>
  );
}

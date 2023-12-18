import HeroEcommerceA from "./hero-product-a";

export default function Example() {
  return (
    <div>
      <div className="lg:hidden" >
        This component it optimized for large screen devices, please use larger
        device (laptop, desktop) to view it.
      </div>
      <div className="hidden lg:block" style={{ minHeight: "400px" }}>
        <HeroEcommerceA />
      </div>
    </div>
  );
}

import ProductCardB from "./product-card-b";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-8 max-w-xl mx-auto">
      <div>
        <a href="#">
          <ProductCardB
            imageSrc="/placeholder/img-portrait-2.jpg"
            title={"Gray Chair"}
            category={"Wood"}
            price={"$100"}
            label={"25% Off"}
            align="center"
          />
        </a>
      </div>
      <div>
        <a href="#">
          <ProductCardB
            imageSrc="/placeholder/img-fashion-portrait-1.jpg"
            title={"Black Shirt"}
            category={"Silk"}
            price={"$100"}
            label={"25% Off"}
            align="center"
            variant="fashion"
          />
        </a>
      </div>
    </div>
  );
}

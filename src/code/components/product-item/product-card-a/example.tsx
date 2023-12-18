import ProductCardA from "./product-card-a";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-8 max-w-xl mx-auto">
      <div>
        <a href="#">
          <ProductCardA
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
          <ProductCardA
            imageSrc="/placeholder/img-fashion-portrait-1.jpg"
            title={"Robe Noire"}
            category={"Silk"}
            price={"$100"}
            label={"25% Off"}
            align="center"
            variant="fashion"
          />
        </a>
      </div>
      <div>
        <a href="#">
          <ProductCardA
            imageSrc="/placeholder/img-portrait-6.jpg"
            title={"Fresh Lemon"}
            price={"$100"}
            label={"25% Off"}
            align="start"
          />
        </a>
      </div>
      <div>
        <a href="#">
          <ProductCardA
            imageSrc="/placeholder/img-fashion-portrait-3.jpg"
            title={"Black Shirt"}
            price={"$100"}
            label={"25% Off"}
            align="start"
            variant="tech"
          />
        </a>
      </div>
    </div>
  );
}

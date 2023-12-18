// ProductItemCDemo.tsx

import ProductItemC from "./product-item-c";

export default function ProductItemCDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <ProductItemC
          imageSrc="/placeholder/img-square-1.jpg"
          title={"Horloge du siècle"}
          description={"An amazing product to be placed anywhere in the room"}
          price="$100"
          href="#"
          tags={["Free delivery"]}
          rating={16}
          isFavorite
        />
      </div>
      <div>
        <ProductItemC
          imageSrc="/placeholder/img-square-2.jpg"
          title={"Chaise en Bois"}
          description={"An amazing product for your room"}
          rating={24}
          price="$100"
          href="#"
          addToCartButtonText="Add to cart"
          category="Home design"
        />
      </div>
      <div>
        <ProductItemC
          imageSrc="/placeholder/img-square-2.jpg"
          title={"Chaise en Bois"}
          description={"An amazing product for your room"}
          rating={24}
          price="$100"
          href="#"
          detailButtonText="Details"
          category="Home design"
          variant="simple"
        />
      </div>
    </div>
  );
}

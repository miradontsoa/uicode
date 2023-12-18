import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ProductItemA from "./product-item-a";
 
export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <ProductItemA
          imageSrc="/placeholder/img-square-1.jpg"
          href="#"
          title={"Horloge du siècle"}
          category={"Furniture"}
          price={"$100"}
          tags={["Free delivery"]}
          rating={"24"}
          iconCart={<ShoppingCartIcon className="w-4"/>}
        />
      </div>
      <div>
        <ProductItemA
          imageSrc="/placeholder/img-square-2.jpg"
          href="#"
          title={"Chaise marbré"}
          price={"$249"}
          isFavorite={true}
          description={"An amazing product to be placed anywhere in the room"}
          variant={"dark"}
        />
      </div>
      <div>
        <ProductItemA
          imageSrc="/placeholder/img-portrait-1.jpg"
          href="#"
          title={"Comfortable gray chair"}
          category={"Furniture"}
          price={"$100"}
          imageAspect={"default"}
          tags={["Free delivery"]}
          rating={"24"}
          iconCart={<ShoppingCartIcon className="w-4"/>}
          variant={"simple"}
        />
      </div>
    </div>
  );
}

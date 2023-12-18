"use client";

import CategoryColorA from "../../category-select/category-color-a/category-color-a";
import ProductItemE from "./product-item-e";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <ProductItemE
          imageSrc="/placeholder/img-square-8.jpg"
          href="#"
          title={"Lumière Jaune"}
          description={"Furniture"}
          price={"$100"}
          tags={["50% Off"]}
          buyButtonText="Buy now"
          categorySelectElement={
            <CategoryColorA
              className="mt-4"
              initialColorSlug="red"
              colors={[
                {
                  slug: "red",
                  rgb: "#FF3894",
                },
                {
                  slug: "purple",
                  rgb: "#8499ff",
                },
                {
                  slug: "white",
                  rgb: "#FFFFFF",
                },
                {
                  slug: "black",
                  rgb: "#2d2d2d",
                },
              ]}
            />
          }
          onClickBuy={() => {}}
        />
      </div>
      <div>
        <ProductItemE
          imageSrc="/placeholder/img-square-2.jpg"
          href="#"
          category={"Furniture"}
          title={"Chaise marbré"}
          price={"$249"}
          isFavorite={true}
          buyButtonText="Buy now"
          description={"An amazing product to be placed anywhere in the room"}
          variant={"dark"}
          onClickBuy={() => {}}
        />
      </div>
    </div>
  );
}

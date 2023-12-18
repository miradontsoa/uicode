// ProductItemCDemo.tsx

import ProductItemD from "./product-item-d";

export default function ProductItemCDemo() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-2xl mx-auto">
      <div>
        <ProductItemD
          imageSrc="/placeholder/img-landscape-1.jpg"
          title={"Ecouteur dB"}
          description={"An amazing sound system"}
          price="$100"
          href="#"
          rating={16}
          isFavorite
        />
      </div>
      <div>
        <ProductItemD
          imageSrc="/placeholder/img-landscape-2.jpg"
          title={"Ecouteur dB"}
          rating={24}
          price="$100"
          href="#"
          detailButtonText="Details"
          category="Sound system"
          variant="light"
        />
      </div>
    </div>
  );
}

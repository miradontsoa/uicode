import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import {
  MinusIcon,
  PlusIcon,
  StarIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import ProductItemF from "./product-item-f";

export default function ProductItemCDemo() {
  return (
    <div className="flex flex-col max-w-sm ml-auto mr-auto gap-4">
      <div>
        <ProductItemF
          imageSrc="/placeholder/img-square-7.jpg"
          title={"Lemon"}
          description={"Fruits - Sweet and fresh lemon"}
          price="$100"
          category={<span className="text-green-600">50% Off</span>}
          rating={"16"}
          isFavorite={true}
          href="#"
          iconFavoriteOn={<StarIcon className="w-4 text-yellow-500" />}
          iconFavoriteOff={<StarIconOutline className="w-4" />}
          iconAdd={<PlusIcon className="w-5" />}
          iconMinus={<MinusIcon className="w-5" />}
          iconRemove={<XMarkIcon className="w-5" />}
          buyButtonText="Buy"
        />
      </div>
      <div>
        <ProductItemF
          imageSrc="/placeholder/img-square-7.jpg"
          title={"Lemon"}
          description={"Fruits - Sweet and fresh lemon"}
          price="$100"
          category={<span className="text-green-600">50% Off</span>}
          rating={"16"}
          isFavorite={true}
          href="#"
          iconFavoriteOn={<StarIcon className="w-4 text-yellow-500" />}
          iconFavoriteOff={<StarIconOutline className="w-4" />}
          iconAdd={<PlusIcon className="w-5" />}
          iconMinus={<MinusIcon className="w-5" />}
          iconRemove={<XMarkIcon className="w-5" />}
          variant="simple"
          buyButtonText="Add to cart"
        />
      </div>
    </div>
  );
}

import ProductItemA from "../../product-item/product-item-a/product-item-a";
import CardFrameA from "./card-frame-a";

export default function Example() {
  return (
    <div className="grid md:grid-cols-2 gap-4 max-w-sm md:max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <div>
          <CardFrameA>
            <h4 className="p-12 text-center">Card Content</h4>
          </CardFrameA>
        </div>
        <div>
          <CardFrameA variant="flat" hoverAnimation="shadow">
            <h4 className="p-12 text-center">Card Content</h4>
          </CardFrameA>
        </div>
        <div>
          <CardFrameA variant="blue">
            <h4 className="p-12 text-center">Card Content</h4>
          </CardFrameA>
        </div>
      </div>
      <div>
        <CardFrameA rounded="medium" variant="flat" hoverAnimation="shadow">
          <div className="p-4">
            <ProductItemA
              imageSrc="/placeholder/img-square-1.jpg"
              href="#"
              title={"Vintage alarm clock"}
              category={"Furniture"}
              price={"$100"}
              imageAspect={"default"}
              variant={"simple"}
            />
          </div>
        </CardFrameA>
      </div>
    </div>
  );
}

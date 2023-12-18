import ProductItemA from "../../product-item/product-item-a/product-item-a";
import GlassB from "./glass-frame-b";

export default function Example() {
  return (
    <div
      className="grid md:grid-cols-2 gap-4 max-w-sm md:max-w-2xl mx-auto p-8"
      style={{
        backgroundImage: 'url("/placeholder/img-landscape-7.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <GlassB>
            <div className="p-8 text-gray-800">
              <h4>Card Content</h4>
              <p>This is a sample text content</p>
            </div>
          </GlassB>
        </div>
        <div>
          <GlassB variant="dark">
            <div className="p-8 text-white">
              <h4>Card Content</h4>
              <p>This is a sample text content</p>
            </div>
          </GlassB>
        </div>
      </div>
      <div>
        <GlassB rounded="large" variant="flat" hoverAnimation="shadow">
          <div className="p-4 text-gray-800">
            <ProductItemA
              className="text-white"
              imageSrc="/placeholder/img-square-1.jpg"
              href="#"
              title={"Vintage alarm clock"}
              category={"Furniture"}
              price={"$100"}
              imageAspect={"default"}
              variant={"simple"}
            />
          </div>
        </GlassB>
      </div>
    </div>
  );
}

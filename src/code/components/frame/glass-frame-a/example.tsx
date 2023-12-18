import ProductItemA from "../../product-item/product-item-a/product-item-a";
import GlassA from "./glass-frame-a";

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
          <GlassA>
            <div className="p-8 text-white">
              <h4 >Card Content</h4>
              <p>This is a sample text content</p>
            </div>
          </GlassA>
        </div>
        <div>
          <GlassA variant="dark">
            <div className="p-8 text-white">
              <h4 >Card Content</h4>
              <p>This is a sample text content</p>
            </div>
          </GlassA>
        </div>
        <div>
          <GlassA variant="flat" hoverAnimation="shadow">
            <div className="p-8 text-white">
              <h4 >Card Content</h4>
              <p>This is a sample text content</p>
            </div>
          </GlassA>
        </div>
      </div>
      <div>
        <GlassA rounded="medium" variant="flat" hoverAnimation="shadow">
          <div className="p-4 text-white">
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
        </GlassA>
      </div>
    </div>
  );
}

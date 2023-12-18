import ProductItemB from "./product-item-b";
 
export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <ProductItemB
          imageSrc="/placeholder/img-square-1.jpg"
          href="#"
          title={"Horloge du siècle"}
          category={"Furniture"}
          price={"$100"}
          align="center"
        />
      </div>
      <div>
        <ProductItemB
          imageSrc="/placeholder/img-square-2.jpg"
          href="#"
          title={"Chaise marbré"}
          price={"$249"}
          align="start"
          variant="green"
          description={"An amazing product to be placed anywhere in the room"}
        />
      </div>
    </div>
  );
}

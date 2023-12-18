import ImageTextA from "./image-text-a";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4 max-w-xl mx-auto">
      <div>
        <ImageTextA
          imageSrc="/placeholder/img-portrait-7.jpg"
          alt={"Melon"}
          textContent={
            <>
              <h5 className="font-semibold">Tasty melon</h5>
              <p>Sweet and yummy</p>
            </>
          }
          textAlignHorizontal="start"
          textAlignVertical="end"
        />
      </div>
      <div>
        <ImageTextA
          imageSrc="/placeholder/img-square-7.jpg"
          alt={"Lemon"}
          textAlignVertical="start"
          textAlignHorizontal="end"
          textContent={
            <>
              <h5 className="font-semibold">Citron Jaune</h5>
              <p>Sweet and yummy</p>
            </>
          }
          variant={"dark"}
        />
      </div>
    </div>
  );
}

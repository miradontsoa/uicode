import ImageTextB from "./image-text-b";

export default function Example() {
  return (
    <div className="grid gap-4 mx-auto">
      <ImageTextB
        imageClassName="w-full max-w-xs"
        imageSrc="/placeholder/img-portrait-8.jpg"
        alt={"Orange"}
        textContent={
          <>
            <h5 className="text-6xl font-bold">Tasty Orange</h5>
            <p>Sweet and yummy</p>
          </>
        }
      />
      <ImageTextB
        imageClassName="w-full max-w-xs"
        imageSrc="/placeholder/img-portrait-6.jpg"
        alt={"Orange"}
        variant={"dark"}
        textContent={
          <>
            <h5 className="text-6xl font-bold">Tasty Lemon</h5>
            <p>Sweet and yummy</p>
          </>
        }
      />
    </div>
  );
}

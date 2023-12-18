import ImageTextD from "./image-text-d";

export default function Example() {
  return (
    <div className="grid gap-4 mx-auto w-full max-w-sm">
      <ImageTextD
        imageSrc="/placeholder/img-portrait-6.jpg"
        alt={"Lemon"}
        variant={"dark"}
        textContent={
          <>
            <h5 className="text-4xl font-bold">Tasty Lemon</h5>
            <p>Sweet and yummy</p>
          </>
        }
      />
      <ImageTextD
        imageSrc="/placeholder/img-portrait-8.jpg"
        alt={"Orange"}
        textAlignVertical="start"
        textAlignHorizontal="end"
        textContent={
          <>
            <h5 className="text-4xl font-bold">Tasty Orange</h5>
            <p>Sweet and yummy</p>
          </>
        }
      />
    </div>
  );
}

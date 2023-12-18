import ImageFrameC from "./image-frame-c";

export default function Example() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-8">
        <ImageFrameC
          alt={"Cool image"}
          imgMainSrc="/placeholder/img-square-3.jpg"
          imgBottomSrc="/placeholder/img-square-7.jpg"
        />
      </div>
      <div>
        <ImageFrameC
          alt={"Cool image"}
          imgMainSrc="/placeholder/img-portrait-3.jpg"
          imgBottomSrc="/placeholder/img-square-2.jpg"
          rounded="large"
        />
      </div>
    </div>
  );
}

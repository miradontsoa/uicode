import ImageFrameD from "./image-frame-d";

export default function Example() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-8">
        <ImageFrameD
          alt={"Cool image"}
          imgMainSrc="/placeholder/img-landscape-6.jpg"
          imgBackSrc="/placeholder/img-portrait-7.jpg"
        />
      </div>
      <div className="">
        <ImageFrameD
          alt={"Cool image"}
          horizontalAlign="end"
          imgMainSrc="/placeholder/img-landscape-5.jpg"
          imgBackSrc="/placeholder/img-portrait-5.jpg"
        />
      </div>
    </div>
  );
}

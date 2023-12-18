import ImageFrameB from "./image-frame-b";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4  max-w-xxl mx-auto">
      <div>
        <ImageFrameB
          alt={"Cool image"}
          imgMainSrc="/placeholder/img-portrait-3.jpg"
          imgTopSrc="/placeholder/img-square-6.jpg"
          imgTopAspect="portrait"
          imgBottomSrc="/placeholder/img-square-7.jpg"
        />
      </div>
      <div>
        <ImageFrameB
          alt={"Cool image"}
          imgMainSrc="/placeholder/img-portrait-2.jpg"
          imgTopSrc="/placeholder/img-landscape-1.jpg"
          imgTopAspect="landscape"
          imgBottomSrc="/placeholder/img-landscape-2.jpg"
          imgBottomAspect="landscape" 
          rounded="large"
        />
      </div>
    </div>
  );
}

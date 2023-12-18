import ImageFrameA from "./image-frame-a";

export default function Example() {
  return (
    <div className="md:grid-cols-2 grid gap-4  max-w-xxl mx-auto">
      <div>
        <ImageFrameA
          title={"Screenshot 1"}
          alt={"Picture of screenshot 1"}
          src="/placeholder/img-app-landscape-1.png"
          aspect="square"
          imageAspect="landscape"
          rounded="large"
        />
      </div>
      <div>
        <ImageFrameA
          alt={"Cool image"}
          src="/placeholder/img-app-portrait-1.png"
          aspect="square"
          imageAspect="portrait"
          imageRounded="small"
          rounded="small"
          variant="red"
        />
      </div>
    </div>
  );
}

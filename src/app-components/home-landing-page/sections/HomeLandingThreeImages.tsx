import ImageSquare from "@/app-components/ui/image/ImageSquare";
import SectionA from "@/app-components/ui/sections/SectionA";

export default function HomeLandingThreeImages() {
  const images = [
    {
      src: "/img/home-image-1.png",
      alt: "Card",
      bgClass: "bg-gradient-aqua",
    },
    {
      src: "/img/home-image-2.png",
      alt: "Product",
      bgClass: "bg-gradient-aqua-primary-light",
    },
    {
      src: "/img/home-image-3.png",
      alt: "Input",
      bgClass: "bg-gradient-primary-light",
    },
  ];
  return (
    <SectionA
      paddingTop={"none"}
      paddingBottom={"none"}
      contentWidth={"medium"}
      withXPageMargin={true}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <ImageSquare
            className={image.bgClass}
            key={image.alt}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </SectionA>
  );
}

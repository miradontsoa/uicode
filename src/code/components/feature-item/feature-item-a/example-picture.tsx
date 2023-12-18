import Image from "next/image";
import imageSrc from "./feature-item-a.png";
export default function ExamplePicture() {
  return (
    <div className="flex justify-center bg-purple-500 bg-gradient-to-br from-red-400">
      <Image width={360} height={360} src={imageSrc} alt={"Example"}/>
    </div>
  );
}

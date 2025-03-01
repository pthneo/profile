import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";

export default function Banner(props: { imageUrl: string; alt: string }) {
  const { imageUrl, alt } = props;

  return (
    <AspectRatio ratio={10 / 3}>
      <Image src={imageUrl} alt={alt} fill className="rounded-md object-cover" />
    </AspectRatio>
  );
}

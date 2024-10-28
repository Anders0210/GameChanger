import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ThumbnailProps {
  src: StaticImport | string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

export default function Thumbnail({
  src,
  alt,
  width,
  height,
  title,
}: ThumbnailProps) {
  return (
    <div className="relative">
      <Image src={src} alt={alt} width={width} height={height} />
      <h3 className="bg-black/80 text-cyan-400 absolute bottom-0 text-center w-full py-2 text-sm">
        {title}
      </h3>
    </div>
  );
}

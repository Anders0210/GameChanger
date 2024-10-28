import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface GamePreviewProps {
  src: StaticImport | string;
  alt: string;
  title: string;
  publisher: string;
  genre: string;
  higlight: boolean;
}

export default function GamePreview({
  src,
  alt,
  title,
  publisher,
  genre,
  higlight,
}: GamePreviewProps) {
  return (
    <div
      className={
        higlight
          ? "bg-gray-200 flex gap-3 w-full p-4 max-h-min"
          : "bg-white flex gap-3 w-full p-4 max-h-min"
      }
    >
      <Image src={src} width={100} height={100} alt={alt} />
      <div className="flex flex-col w-full">
        <h3 className="text-xl font-medium">
          {title}
          <br />
          <span className="text-base text-gray-700">
            Udgiver: {publisher}
            <br />
            Genre: {genre}
          </span>
        </h3>
      </div>
    </div>
  );
}

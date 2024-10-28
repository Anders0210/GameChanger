import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface GameInfoProps {
  src: StaticImport | string;
  alt: string;
  title: string;
  publisher: string;
  genre: string;
  higlight: boolean;
}

export default function GameInfo({
  src,
  alt,
  title,
  publisher,
  genre,
  higlight,
}: GameInfoProps) {
  return (
    <div
      className={
        higlight
          ? "bg-gray-200 flex gap-3 w-full p-4 max-h-min"
          : "bg-white flex gap-3 w-full p-4 max-h-min"
      }
    >
      <Image src={src} width={192} height={192} alt={alt} />
      <div className="flex flex-col w-full">
        <h3 className="text-xl font-medium">
          {title}
          <br />
          <span className="text-base text-gray-700">
            Udgiver: <span className="underline">{publisher}</span>
            <span className="border border-gray-400 h-4 mx-2" />
            Genre: {genre}
          </span>
        </h3>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          recusandae repellendus debitis illum ab asperiores nihil modi eos,
          tenetur aspernatur nostrum in hic. Necessitatibus similique vitae
          consequatur quaerat, ex officiis reiciendis ipsam, aliquam voluptatum,
          beatae non hic ut voluptates velit.
        </p>
      </div>
    </div>
  );
}

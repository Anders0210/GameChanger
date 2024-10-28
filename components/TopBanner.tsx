interface TopBannerProps {
  title: string;

  description: string;
}

export default function TopBanner({ title, description }: TopBannerProps) {
  return (
    <div className="h-[90%] w-1/6 bg-black/70 backdrop-blur-sm absolute z-10 right-1/4 flex justify-start items-end">
      <div className="text-white text-start mx-4 w-4/5 z-20">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-sm font-light mb-4">{description}</p>
      </div>
    </div>
  );
}

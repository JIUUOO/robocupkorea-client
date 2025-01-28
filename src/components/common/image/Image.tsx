import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import clsx from "clsx";

interface ImageProps {
  src: string;
}

export default function Image({ src }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!isLoaded && <Skeleton className="absolute left-0 top-0 aspect-[109/48] w-full rounded" />}
      <img
        src={src}
        alt={src}
        className={clsx("h-full w-full rounded transition-opacity duration-500", {
          "opacity-100": isLoaded,
          "opacity-0": !isLoaded,
        })}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

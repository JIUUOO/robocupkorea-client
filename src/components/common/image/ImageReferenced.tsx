import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import clsx from "clsx";

interface ImageReferencedProps {
  src: string;
  origin: string;
}

export default function ImageReferenced({ src, origin }: ImageReferencedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    alert(origin);
  };

  return (
    <div className="relative h-full w-full">
      {!isLoaded && <Skeleton className="aspect-[109/48] w-full rounded" />}
      <img
        src={src}
        alt={src}
        className={clsx("w-full rounded transition-opacity duration-500", {
          "opacity-100": isLoaded,
          "opacity-0": !isLoaded,
        })}
        onLoad={() => setIsLoaded(true)}
        onClick={handleClick}
      />
    </div>
  );
}

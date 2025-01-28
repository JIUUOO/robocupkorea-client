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
      {!isLoaded && <Skeleton className="absolute left-0 top-0 h-full w-full rounded" />}
      <img
        src={src}
        alt={src}
        className={clsx("h-full w-full rounded transition-opacity duration-500", {
          "opacity-100": isLoaded,
          "opacity-0": !isLoaded,
        })}
        onLoad={() => setIsLoaded(true)}
        onClick={handleClick}
      />
    </div>
  );
}

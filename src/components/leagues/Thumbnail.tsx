import { useRef } from "react";

interface ThumbnailProps {
  src: string;
}

export default function Thumbnail({ src }: ThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        className="rounded border-transparent hover:ring hover:ring-black"
        muted
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

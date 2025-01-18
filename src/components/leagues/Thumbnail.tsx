import { useEffect, useRef, useState } from "react";

interface ThumbnailProps {
  src: string;
}

export default function Thumbnail({ src }: ThumbnailProps) {
  const [isVisible, setIsVisible] = useState(false);
  const thumbnailRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1,
      },
    );

    if (thumbnailRef.current) {
      observer.observe(thumbnailRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={thumbnailRef}>
      {isVisible && (
        <video
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={videoRef}
          className="rounded border-transparent hover:ring hover:ring-black"
          preload="metadata"
          muted
          loop
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

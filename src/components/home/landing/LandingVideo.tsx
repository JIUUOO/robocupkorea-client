import landing from "@/assets/videos/landing.mp4";
import { useEffect, useRef } from "react";

export default function LandingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // iOS에서 자동재생을 위한 설정
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Video autoplay failed:", error);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="pointer-events-none fixed flex w-full justify-center">
      <video
        ref={videoRef}
        className="h-screen w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        webkit-playsinline="true"
      >
        <source src={landing} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

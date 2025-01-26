import landing from "@/assets/videos/landing.mp4";

interface LandingVideoProps {
  setIsVideoLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LandingVideo({ setIsVideoLoaded }: LandingVideoProps) {
  return (
    <div className="pointer-events-none fixed -z-10 flex w-full justify-center">
      <video
        className="h-svh w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        webkit-playsinline="true"
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        style={{ overflowClipMargin: "content-box 0px" }}
      >
        <source src={landing} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

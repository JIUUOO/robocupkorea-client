import landing from "@/assets/videos/landing.mp4";

export default function LandingVideo() {
  return (
    <div className="pointer-events-none fixed flex w-full justify-center">
      <video
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

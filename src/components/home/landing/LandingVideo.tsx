import Landing from "@/assets/videos/landing.mp4";

export default function LandingVideo() {
  return (
    <div className="pointer-events-none fixed flex w-full justify-center">
      <video className="h-screen w-full object-cover" autoPlay loop muted preload="metadata" playsInline>
        <source src={Landing} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

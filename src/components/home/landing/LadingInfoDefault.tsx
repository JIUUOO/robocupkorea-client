export default function LandingInfoDefault() {
  return (
    <div className="fixed h-full w-full min-w-[376px]">
      <div className="container mt-16 flex h-full w-full flex-col items-center justify-center md:mt-24">
        <div className="text-white" style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4);" }}>
          <div className="text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">사단법인 한국로보컵협회</div>
          <div className="text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
            Project-Oriented Educational Initiative
          </div>
        </div>
      </div>
    </div>
  );
}

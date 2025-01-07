import LinkButton from "../../common/button/LinkButton";

export default function LandingInfo() {
  return (
    <div className="fixed bottom-10 left-0 w-full min-w-[375px]">
      <div className="container flex flex-col gap-2">
        <div
          className="text-4xl font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          <span className="max-md:block">제13회&nbsp;</span>
          <span className="max-md:block">한국로보컵오픈 2025</span>
        </div>
        <div className="flex max-lg:flex-col max-lg:gap-2 lg:items-end lg:justify-between">
          <div
            className="text-base font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            <span className="max-md:block">2025.02.14-16&nbsp;</span>
            <span className="max-md:block">강원특별자치도 평창군 알펜시아리조트 컨벤션센터</span>
          </div>
          <div className="flex items-end">
            <div className="flex gap-4 max-lg:justify-end">
              <LinkButton to="/events/latest" title="자세히 알아보기" />
              {/* <NavigateButton to="" title="규정 확인하기" color="white" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

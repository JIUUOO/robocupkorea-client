import LinkButton from "../../common/button/LinkButton";

export default function LandingInfo() {
  return (
    <div className="fixed bottom-10 left-0 w-full">
      <div className="container flex flex-col gap-2">
        <div
          className="r-text-6xl font-bold text-white max-md:text-5xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          <span className="max-lg:block">제13회&nbsp;</span>
          <span className="max-lg:block">한국로보컵오픈 2025</span>
        </div>
        <div className="flex max-lg:flex-col max-lg:gap-2 lg:items-end lg:justify-between">
          <div className="r-text-2xl font-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
            <span className="max-lg:block">2025.02.14-16&nbsp;</span>
            <span className="max-lg:block">강원특별자치도 평창군 알펜시아리조트 컨벤션센터</span>
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

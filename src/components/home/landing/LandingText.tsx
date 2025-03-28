import LinkButton from "@/components/common/button/LinkButton";
import { useLanguage } from "@/hooks/useLanguage";

import { EventLatestResponse } from "@/types/events/EventLatestResponse";

interface LandingTextProps {
  data: EventLatestResponse;
}

export default function LandingText({ data }: LandingTextProps) {
  const { language } = useLanguage();

  return (
    <div className="fixed left-0 top-0 h-svh w-screen min-w-[376px]">
      <div className="container flex h-full w-full flex-col justify-end pb-6 md:pb-8">
        <div className="text-shadow text-4xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl">
          {data.title}
        </div>
        <div className="flex max-md:flex-col max-md:gap-2 md:items-center md:justify-between">
          <div className="text-lg font-bold text-white md:text-xl lg:text-2xl">
            <span className="text-shadow max-lg:block">
              {data.dates[0].replaceAll("-", ".")}
              {`${data.dates[1] ? `-${data.dates[1].split("-").pop()}` : ""} `}
            </span>
            <span className="text-shadow max-lg:block">{data.location}</span>
          </div>
          <div className="flex items-end">
            <div className="flex gap-4 max-md:justify-center">
              <LinkButton
                to={`/events/${data.id}${location.search}`}
                title={language === "ko-KR" ? "자세히 알아보기" : "Read More"}
                icon="arrow-right"
              />
              {/* <NavigateButton to="" title="규정 확인하기" color="white" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

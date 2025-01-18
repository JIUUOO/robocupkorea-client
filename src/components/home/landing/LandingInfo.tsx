import LinkButton from "@/components/common/button/LinkButton";

import { EventLatestResponse } from "@/types/events/EventLatestResponse";

interface LandingInfoProps {
  data: EventLatestResponse;
}

export default function LandingInfo({ data }: LandingInfoProps) {
  return (
    <div className="fixed bottom-10 left-0 w-full min-w-[376px]">
      <div className="container flex flex-col gap-2">
        <div
          className="text-4xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          {data.title}
        </div>
        <div className="flex max-md:flex-col max-md:gap-2 md:items-center md:justify-between">
          <div
            className="text-lg font-bold text-white md:text-xl lg:text-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            <span className="max-sm:block">
              {data.dates[0].replaceAll("-", ".")}
              {`${data.dates[1] ? `-${data.dates[1].split("-").pop()}` : ""} `}
            </span>
            <span className="max-sm:block">{data.location}</span>
          </div>
          <div className="flex items-end">
            <div className="flex gap-4 max-md:justify-center">
              <LinkButton to={`/events/${data.id}`} title="자세히 알아보기" icon={true} />
              {/* <NavigateButton to="" title="규정 확인하기" color="white" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

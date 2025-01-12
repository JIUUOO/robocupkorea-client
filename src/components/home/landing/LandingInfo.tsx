import LinkButton from "@/components/common/button/LinkButton";

import { EventLatestResponse } from "@/types/events/EventLatestResponse";

interface LandingInfoProps {
  data: EventLatestResponse;
}

export default function LandingInfo({ data }: LandingInfoProps) {
  return (
    <div className="fixed bottom-10 left-0 w-full min-w-[375px]">
      <div className="container flex flex-col gap-2">
        <div
          className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl xl:text-8xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          {data.title}
        </div>
        <div className="flex max-lg:flex-col max-lg:gap-2 lg:items-end lg:justify-between">
          <div
            className="text-base font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            <span className="max-md:block">
              {data.dates[0]}
              {data.dates[1] ? `-${data.dates[1].split(".").pop()} ` : ""}
            </span>
            <span className="max-md:block">{data.location}</span>
          </div>
          <div className="flex items-end">
            <div className="flex gap-4 max-lg:justify-end">
              <LinkButton to={`/events/${data.id}`} title="자세히 알아보기" />
              {/* <NavigateButton to="" title="규정 확인하기" color="white" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

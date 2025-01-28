import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import clsx from "clsx";

import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";
import LinkButton from "@/components/common/button/LinkButton";
import { useFetchEvents } from "@/hooks/events/useFetchEvents";
import SectionHeader from "@/components/common/SectionHeader";

export default function Events() {
  const { data, isLoading, isError } = useFetchEvents();
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  // 모든 이미지 로드 완료 여부를 확인하는 함수
  const isImageLoaded = (index: number) => loadedImages.includes(index);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  if (isLoading || isError)
    return (
      <>
        <SectionHeader title="Upcoming Event">
          <CardContainer grid="md:grid" gridcols="md:grid-cols-2">
            <CardGroup colspan="col-span-1">
              <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
            </CardGroup>
            <CardGroup colspan="col-span-1">
              <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
            </CardGroup>
          </CardContainer>
        </SectionHeader>

        <SectionHeader title="Past Events">
          <CardContainer grid="md:grid" gridcols="md:grid-cols-2">
            <CardGroup colspan="col-span-1">
              <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
            </CardGroup>
            <CardGroup colspan="col-span-1">
              <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
            </CardGroup>
          </CardContainer>
        </SectionHeader>
      </>
    );

  return (
    <>
      <SectionHeader title="Upcoming Event">
        <CardContainer grid="md:grid" gridcols="sm:grid-cols-2">
          <CardGroup colspan="col-span-1">
            <Card
              title={data?.events[0]?.title}
              content={
                <div className="aspect-[210/297]">
                  {!isImageLoaded(0) && <Skeleton className="h-full w-full rounded" />}
                  <img
                    src={data?.events[0]?.images[0]}
                    alt=""
                    className={clsx("h-full w-full rounded object-cover transition-opacity duration-500", {
                      "opacity-100": isImageLoaded(0),
                      "opacity-0": !isImageLoaded(0),
                    })}
                    onLoad={() => handleImageLoad(0)}
                  />
                </div>
              }
              footer={<LinkButton to="/events/robocup-open-2025" title="자세히 보기" icon={true} />}
              compact={true}
            />
          </CardGroup>
        </CardContainer>
      </SectionHeader>

      <SectionHeader title="Past Events">
        <CardContainer grid="md:grid" gridcols="sm:grid-cols-2">
          {data &&
            data?.events.length > 1 &&
            data.events.slice(1).map((event, index) => (
              <Card
                key={event.id}
                title={event.title}
                content={
                  <div className="aspect-[210/297]">
                    {!isImageLoaded(index + 1) && <Skeleton className="h-full w-full rounded" />}
                    <img
                      src={event.images[0]}
                      alt=""
                      className={clsx("h-full w-full rounded object-cover transition-opacity duration-500", {
                        "opacity-100": isImageLoaded(0),
                        "opacity-0": !isImageLoaded(0),
                      })}
                      onLoad={() => handleImageLoad(index + 1)}
                    />
                  </div>
                }
                compact={true}
                varient="default"
              />
            ))}
        </CardContainer>
      </SectionHeader>
    </>
  );
}

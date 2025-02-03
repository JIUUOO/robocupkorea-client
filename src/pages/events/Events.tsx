import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import clsx from "clsx";

import CardGrid from "@/components/common/card/CardGrid";
import CardColumn from "@/components/common/card/CardColumn";
import Card from "@/components/common/card/Card";
import LinkButton from "@/components/common/button/LinkButton";
import { useFetchEvents } from "@/hooks/events/useFetchEvents";
import { useLanguage } from "@/hooks/useLanguage";
import SEOTitle from "@/components/common/seo/SEOTitle";
import PageHeader from "@/components/common/PageHeader";

export default function Events() {
  const { data, isLoading, isError } = useFetchEvents();
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const { language } = useLanguage();

  // 모든 이미지 로드 완료 여부를 확인하는 함수
  const isImageLoaded = (index: number) => loadedImages.includes(index);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  if (isLoading || isError)
    return (
      <>
        <SEOTitle title="EVENTS" />

        <PageHeader title="RCKA Events" />

        <CardGrid grid="md:grid" gridcols="md:grid-cols-2">
          <CardColumn colspan="col-span-1">
            <Card
              title="&nbsp;"
              content={<Skeleton className="aspect-[210/297] w-full rounded" enableAnimation={!isError} />}
              footer="&nbsp;"
              compact={true}
              varient="default"
            />
          </CardColumn>
        </CardGrid>
      </>
    );

  return (
    <>
      <SEOTitle title="EVENTS" />

      <PageHeader title="RCKA Events" />

      <CardGrid grid="md:grid" gridcols="sm:grid-cols-2">
        {data &&
          data.events.map((event, index) => (
            <CardColumn key={event.id} colspan="col-span-1">
              <Card
                title={event.title}
                content={
                  <div className="aspect-[210/297] w-full">
                    {!isImageLoaded(index) && <Skeleton className="h-full w-full rounded" />}
                    <img
                      src={event.images[index]}
                      alt=""
                      className={clsx("h-full w-full rounded object-cover transition-opacity duration-500", {
                        "opacity-100": isImageLoaded(index),
                        "hidden opacity-0": !isImageLoaded(index),
                      })}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                }
                footer={
                  <LinkButton
                    to={`/events/${event.id}${location.search}`}
                    title={language === "ko-KR" ? "자세히 보기" : "Read More"}
                    icon="arrow-right"
                  />
                }
                compact={true}
                varient="default"
              />
            </CardColumn>
          ))}
      </CardGrid>
    </>
  );
}

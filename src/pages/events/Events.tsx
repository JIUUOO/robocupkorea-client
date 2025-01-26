import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";
import LinkButton from "@/components/common/button/LinkButton";
import { useFetchEvents } from "@/hooks/events/useFetchEvents";
import SectionHeader from "@/components/common/SectionHeader";

export default function Events() {
  const { data, isLoading, isError } = useFetchEvents();

  if (isLoading || isError)
    return (
      <>
        <SectionHeader title="Upcoming Event">
          <CardContainer grid="md:grid" gridcols="md:grid-cols-2">
            <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
            <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
          </CardContainer>
        </SectionHeader>

        <SectionHeader title="Past Events">
          <CardContainer grid="md:grid" gridcols="md:grid-cols-2">
            <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
            <Skeleton className="aspect-[177/297] max-h-[900px] w-full rounded" enableAnimation={!isError} />
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
                <>
                  <div className="aspect-[210/297]">
                    <img src={data?.events[0]?.images[0]} alt="" className="" />
                  </div>
                </>
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
            data.events.slice(1).map((event) => (
              <Card
                key={event.id}
                title={event.title}
                content={
                  <>
                    <img src={data?.events[0]?.images[0]} alt="" className="" />
                  </>
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

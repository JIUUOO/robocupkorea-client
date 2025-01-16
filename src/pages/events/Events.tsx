import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";

import LinkButton from "@/components/common/button/LinkButton";
import { useFetchEvents } from "@/hooks/events/useFetchEvents";
import SectionHeader from "@/components/common/SectionHeader";
import buildApiBaseUrl from "@/utils/buildApiBaseUrl";

export default function Events() {
  const { data, isLoading, isError } = useFetchEvents();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details</div>;

  return (
    <>
      <SectionHeader title="Upcoming Event">
        <CardContainer grid="md:grid" gridcols="sm:grid-cols-2">
          <CardGroup colspan="col-span-1">
            <Card
              title={data?.events[0]?.title}
              content={
                <>
                  <div>
                    <img src={buildApiBaseUrl(data?.events[0]?.images[0])} alt="" className="" />
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
            data.events.slice(1).map((item) => (
              <Card
                title="제5회 한국창의코딩대회"
                content={
                  <>
                    <img src={buildApiBaseUrl(item.images[0])} />
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

import { useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";

import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardItem from "@/components/common/card/CardItem";
import { useFetchEventDetail } from "@/hooks/events/useFetchEventDetail";
import Calendar from "@/components/events/Calendar";
import LinkButton from "@/components/common/button/LinkButton";
import SectionHeader from "@/components/common/SectionHeader";
import { LeagueKeys, leaguesData } from "@/data/leagues/leaguesData";
import convertLeagueId from "@/utils/convertLeagueId";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { data, isLoading, isError } = useFetchEventDetail(id!);

  if (isLoading || isError)
    return (
      <>
        <CardContainer>
          <Skeleton className="aspect-[210/297] w-full rounded" />
        </CardContainer>
      </>
    );

  return (
    <>
      <CardContainer gridcols="lg:grid-cols-12">
        <CardItem colspan="col-span-7">
          {!isImageLoaded && <Skeleton className="aspect-[210/297] w-full rounded" />}
          <img
            className={clsx("w-full transition-opacity duration-500", {
              "opacity-100": isImageLoaded,
              "m-0 hidden p-0 opacity-0": !isImageLoaded,
            })}
            src={data?.images[0]}
            alt=""
            onLoad={() => setIsImageLoaded(true)}
          />
        </CardItem>
        <CardItem colspan="col-span-5">
          <Card title="Schedule" content={<Calendar dates={data?.dates ?? []} />} compact={true} />
          <Card
            title="Location"
            content={
              <iframe
                className="h-full max-lg:aspect-video"
                referrerPolicy="no-referrer-when-downgrade"
                src={data?.map}
              ></iframe>
            }
            compact={true}
          />
        </CardItem>
      </CardContainer>

      <CardContainer gridcols="lg:grid-cols-12">
        <CardItem colspan="col-span-4">
          <Card title="협동" content="협력과 아이디어 공유를 통한 공동의 목표 달성하고 싶은 학생" compact={true} />
        </CardItem>
        <CardItem colspan="col-span-4">
          <Card title="도전" content="로봇공학 기술로 미션을 해결할 수 있는 대회" compact={true} />
        </CardItem>
        <CardItem colspan="col-span-4">
          <Card title="세계" content="국제적인 무대로의 출전권 획득" compact={true} />
        </CardItem>
      </CardContainer>

      <CardContainer>
        <CardItem>
          <Card
            title="참가 신청"
            footer={
              <LinkButton
                to={data?.register ? data.register : ""}
                external={true}
                title="참가 신청"
                icon={true}
                direction="up-right"
              />
            }
          />
        </CardItem>
      </CardContainer>

      <SectionHeader title="한국로보컵협회 인증센터">
        <CardContainer gridcols="lg:grid-cols-12">
          {data?.others.map((other) => (
            <CardItem key={other.title} colspan="col-span-3">
              <Card title={other.title} content={other.description} compact={true} />
            </CardItem>
          ))}
        </CardContainer>
      </SectionHeader>

      <SectionHeader title="종목 개요">
        <CardContainer grid="md:grid" gridcols="grid-cols-2">
          {data?.leagues.map((leagueRawId) => {
            const leagueId = convertLeagueId(leagueRawId);

            if (leagueId in leaguesData) {
              const league = leaguesData[leagueId as LeagueKeys];
              return (
                <CardItem key={leagueId}>
                  <Card
                    title={league.title}
                    content={<>{league.content}</>}
                    footer={
                      <>
                        <div className="flex gap-2">
                          <LinkButton to={`/leagues/${leagueId}`} title="종목 살펴보기" icon={true} />
                          <LinkButton to={`/leagues/${leagueId}`} title="종목 다운로드" icon={true} direction="down" />
                        </div>
                      </>
                    }
                  />
                </CardItem>
              );
            }
            return undefined;
          })}
        </CardContainer>
      </SectionHeader>
    </>
  );
}

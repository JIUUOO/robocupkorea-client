import { useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";

import Card from "@/components/common/card/Card";
import CardGrid from "@/components/common/card/CardGrid";
import CardColumn from "@/components/common/card/CardColumn";
import { useFetchEventDetail } from "@/hooks/events/useFetchEventDetail";
import Calendar from "@/components/events/Calendar";
import LinkButton from "@/components/common/button/LinkButton";
import CardHeader from "@/components/common/card/CardHeader";
import { LeagueKeys, leaguesData } from "@/data/leagues/leaguesData";
import convertLeagueId from "@/utils/convertLeagueId";
import { useLanguage } from "@/hooks/useLanguage";
import SEOTitle from "@/components/common/seo/SEOTitle";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { data, isLoading, isError } = useFetchEventDetail(id!);
  const { language } = useLanguage();

  if (isLoading || isError)
    return (
      <>
        <SEOTitle title="EVENTS" />

        <CardGrid>
          <Skeleton className="aspect-[210/297] w-full rounded" />
        </CardGrid>
      </>
    );

  switch (language) {
    case "ko-KR":
      return (
        <>
          <SEOTitle title={data?.title} />

          <CardGrid gridcols="lg:grid-cols-12">
            <CardColumn colspan="col-span-7">
              {!isImageLoaded && <Skeleton className="aspect-[210/297] w-full rounded" />}
              <img
                className={clsx("w-full rounded transition-opacity duration-500", {
                  "opacity-100": isImageLoaded,
                  "m-0 hidden p-0 opacity-0": !isImageLoaded,
                })}
                src={data?.images[0]}
                alt=""
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardColumn>
            <CardColumn colspan="col-span-5">
              <Card title="Schedule" content={<Calendar dates={data?.dates ?? []} />} compact={true} nostretch={true} />
              <Card
                title="Location"
                content={
                  <iframe
                    className="h-full rounded max-lg:aspect-video"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={data?.map}
                  ></iframe>
                }
                compact={true}
              />
            </CardColumn>
          </CardGrid>

          <CardGrid>
            <CardColumn>
              <Card
                title="참가 신청"
                content={
                  <>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      <div className="flex flex-col gap-2 rounded bg-neutral p-3">
                        <div className="r-text-2xl font-medium">협동</div>
                        <div>협력과 아이디어 공유를 통한 공동의 목표 달성하고 싶은 학생</div>
                      </div>

                      <div className="flex flex-col gap-2 rounded bg-neutral p-3">
                        <div className="r-text-2xl font-medium">도전</div>
                        <div>로봇공학 기술로 미션을 해결할 수 있는 대회</div>
                      </div>

                      <div className="flex flex-col gap-2 rounded bg-neutral p-3">
                        <div className="r-text-2xl font-medium">세계</div>
                        <div>국제적인 무대로의 출전권 획득</div>
                      </div>
                    </div>
                  </>
                }
                footer={
                  <LinkButton
                    to={data?.register ? data.register : ""}
                    external={true}
                    title="참가 신청"
                    icon="arrow-up-right"
                  />
                }
              />
            </CardColumn>
          </CardGrid>

          {/* <CardHeader title="한국로보컵협회 인증센터">
          <CardGrid gridcols="lg:grid-cols-12">
            {data?.others.map((other) => (
              <CardColumn key={other.title} colspan="col-span-3">
                <Card title={other.title} content={other.description} compact={true} />
              </CardColumn>
            ))}
          </CardGrid>
        </CardHeader> */}

          <CardHeader title="종목 개요">
            <CardGrid grid="md:grid" gridcols="grid-cols-2">
              {data?.leagues.map((leagueRawId) => {
                const leagueId = convertLeagueId(leagueRawId).replaceAll('"', "");

                if (leagueId in leaguesData) {
                  const league = leaguesData[leagueId as LeagueKeys];

                  return (
                    <CardColumn key={leagueId}>
                      <Card
                        title={`${league.parent}-${league.title}`}
                        content={
                          <>
                            {league.preview}
                            <p>{league.content[language].props.children?.[0]?.props.children.slice(0, 52)}...</p>
                          </>
                        }
                        footer={
                          <>
                            <div className="flex gap-2">
                              <LinkButton
                                to={`/leagues/${leagueId}${location.search}`}
                                title="종목 살펴보기"
                                icon="arrow-right"
                              />
                              {/* <LinkButton to={`/leagues/${leagueId}`} title="규정 다운로드" icon="file-pdf" /> */}
                            </div>
                          </>
                        }
                      />
                    </CardColumn>
                  );
                }
                return undefined;
              })}
            </CardGrid>
          </CardHeader>

          {data?.volunteer && (
            <CardGrid>
              <CardColumn>
                <Card
                  title="행사준비 및 진행 안전요원"
                  content={
                    <>
                      <p className="r-text-base">행사장 안전 관리 및 진행 보조 봉사자를 모집합니다.</p>
                    </>
                  }
                  footer={
                    <LinkButton to={data?.volunteer} title="자원봉사 신청하기" external={true} icon="arrow-up-right" />
                  }
                />
              </CardColumn>
            </CardGrid>
          )}
        </>
      );

    case "en-US":
      return (
        <>
          <SEOTitle title={data?.title} />

          <CardGrid gridcols="lg:grid-cols-12">
            <CardColumn colspan="col-span-7">
              {!isImageLoaded && <Skeleton className="aspect-[210/297] w-full rounded" />}
              <img
                className={clsx("w-full rounded transition-opacity duration-500", {
                  "opacity-100": isImageLoaded,
                  "m-0 hidden p-0 opacity-0": !isImageLoaded,
                })}
                src={data?.images[0]}
                alt=""
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardColumn>
            <CardColumn colspan="col-span-5">
              <Card title="Schedule" content={<Calendar dates={data?.dates ?? []} />} compact={true} nostretch={true} />
              <Card
                title="Location"
                content={
                  <iframe
                    className="h-full rounded max-lg:aspect-video"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={data?.map}
                  ></iframe>
                }
                compact={true}
              />
            </CardColumn>
          </CardGrid>

          <CardGrid>
            <CardColumn>
              <Card
                title="Registration"
                content={
                  <>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      <div className="flex flex-col gap-2 rounded bg-neutral p-3">
                        <div className="r-text-2xl font-medium">Collaboration</div>
                        <div>Students who want to achieve a common goal through cooperation and idea sharing.</div>
                      </div>

                      <div className="flex flex-col gap-2 rounded bg-neutral p-3">
                        <div className="r-text-2xl font-medium">Challenge</div>
                        <div>A competition where participants solve missions using robotics technology.</div>
                      </div>

                      <div className="flex flex-col gap-2 rounded bg-neutral p-3">
                        <div className="r-text-2xl font-medium">Global Stage</div>
                        <div>An opportunity to qualify for international competitions.</div>
                      </div>
                    </div>
                  </>
                }
                footer={
                  <LinkButton
                    to={data?.register ? data.register : ""}
                    external={true}
                    title="Registration"
                    icon="arrow-up-right"
                  />
                }
                compact={true}
              />
            </CardColumn>
          </CardGrid>

          {/* <CardHeader title="Etc.">
          <CardGrid gridcols="lg:grid-cols-12">
            {data?.others.map((other) => (
              <CardColumn key={other.title} colspan="col-span-3">
                <Card title={other.title} content={other.description} compact={true} />
              </CardColumn>
            ))}
          </CardGrid>
        </CardHeader> */}

          <CardHeader title="Leagues">
            <CardGrid grid="md:grid" gridcols="grid-cols-2">
              {data?.leagues.map((leagueRawId) => {
                const leagueId = convertLeagueId(leagueRawId).replaceAll('"', "");

                if (leagueId in leaguesData) {
                  const league = leaguesData[leagueId as LeagueKeys];
                  return (
                    <CardColumn key={leagueId}>
                      <Card
                        title={`${league.parent}-${league.title}`}
                        content={
                          <>
                            {league.preview}
                            <p>{league.content[language].props.children?.[0]?.props.children.slice(0, 52)}...</p>
                          </>
                        }
                        footer={
                          <>
                            <div className="flex gap-2">
                              <LinkButton
                                to={`/leagues/${leagueId}${location.search}`}
                                title="Explore More"
                                icon="arrow-right"
                              />
                              {/* <LinkButton to={`/leagues/${leagueId}`} title="Download Rules" icon="file-pdf" /> */}
                            </div>
                          </>
                        }
                      />
                    </CardColumn>
                  );
                }
                return undefined;
              })}
            </CardGrid>
          </CardHeader>
        </>
      );
  }
}

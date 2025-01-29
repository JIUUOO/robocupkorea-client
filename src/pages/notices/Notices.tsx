import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import LinkButton from "@/components/common/button/LinkButton";
import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardItem from "@/components/common/card/CardItem";
import SectionHeader from "@/components/common/SectionHeader";
import { useFetchNotices } from "@/hooks/notices/useFetchNotices";
import { useLanguage } from "@/hooks/useLanguage";

export default function Notices() {
  const { data, isLoading, isError } = useFetchNotices();
  const { language } = useLanguage();

  if (isLoading || isError)
    return (
      <>
        <SectionHeader title="Notices">
          <CardContainer grid="md:grid" gridcols="md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-52 w-full rounded" enableAnimation={!isError} />
            <Skeleton className="h-52 w-full rounded" enableAnimation={!isError} />
          </CardContainer>
        </SectionHeader>
      </>
    );

  return (
    <>
      <SectionHeader title="Notices">
        <CardContainer grid="md:grid" gridcols="md:grid-cols-2 lg:grid-cols-3">
          {data?.notices.map((notice) => (
            <CardItem key={notice.id} colspan="col-span-1">
              <Card
                title={notice.title}
                subtitle={
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-black">
                    <span className="text-white">{notice.attachmentsCount}</span>
                  </div>
                }
                content={
                  <>
                    <div className="r-text-sm">{notice.date}</div>
                    {notice.content}
                  </>
                }
                footer={
                  <LinkButton
                    title={language === "ko-KR" ? "자세히 보기" : "Read More"}
                    to={`/notices/${notice.id}${location.search}`}
                    align="center"
                  />
                }
              />
            </CardItem>
          ))}
        </CardContainer>
      </SectionHeader>
    </>
  );

  // <div className="text-xl">{data?.notices?.[0].id}</div>;
}

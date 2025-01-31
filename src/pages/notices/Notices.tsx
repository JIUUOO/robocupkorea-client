import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import LinkButton from "@/components/common/button/LinkButton";
import Card from "@/components/common/card/Card";
import CardGrid from "@/components/common/card/CardGrid";
import CardColumn from "@/components/common/card/CardColumn";
import { useFetchNotices } from "@/hooks/notices/useFetchNotices";
import { useLanguage } from "@/hooks/useLanguage";
import SEOTitle from "@/components/common/seo/SEOTitle";
import PageHeader from "@/components/common/PageHeader";

export default function Notices() {
  const { data, isLoading, isError } = useFetchNotices();
  const { language } = useLanguage();

  if (isLoading || isError)
    return (
      <>
        <SEOTitle title="NOTICES" />

        <PageHeader title="Notices" />

        <CardGrid grid="md:grid" gridcols="md:grid-cols-2 xl:grid-cols-3">
          <Skeleton className="h-52 w-full rounded" enableAnimation={!isError} />
          <Skeleton className="h-52 w-full rounded" enableAnimation={!isError} />
        </CardGrid>
      </>
    );

  return (
    <>
      <SEOTitle title="NOTICES" />

      <PageHeader title="Notices" />

      <CardGrid grid="md:grid" gridcols="md:grid-cols-2 xl:grid-cols-3">
        {data?.notices.map((notice) => (
          <CardColumn key={notice.id} colspan="col-span-1">
            <Card
              title={notice.title}
              content={
                <>
                  <div className="r-text-sm">{notice.date}</div>
                  {notice.content.slice(0, 26)}...
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
          </CardColumn>
        ))}
      </CardGrid>
    </>
  );
}

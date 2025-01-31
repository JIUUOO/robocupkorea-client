import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import CardGrid from "@/components/common/card/CardGrid";
import CardColumn from "@/components/common/card/CardColumn";
import Card from "@/components/common/card/Card";
import { useFetchNoticeDetail } from "@/hooks/notices/useFetchNoticeDetail";
// import LinkButton from "@/components/common/button/LinkButton";
// import buildApiBaseUrl from "@/utils/buildApiBaseUrl";
import SEOTitle from "@/components/common/seo/SEOTitle";
import React from "react";

export default function NoticeDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchNoticeDetail(id!);

  if (isLoading || isError)
    return (
      <>
        <SEOTitle title="NOTICE" />

        <CardGrid>
          <Skeleton className="h-52 w-full rounded" enableAnimation={!isError} />
        </CardGrid>
      </>
    );

  return (
    <>
      <SEOTitle title="NOTICE" />

      <CardGrid>
        <CardColumn>
          <Card
            title={data?.title}
            content={
              <>
                <div>{data?.date}</div>
                <div>
                  {data?.content.split("\\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                {/* <div className="flex flex-col gap-2">
                  <div className="r-text-2xl font-semibold">첨부파일</div>
                  <div className="flex flex-wrap gap-2">
                    {data?.attachments.map((attachment) => (
                      <div key={attachment.name} className="flex">
                        <LinkButton external={true} to={buildApiBaseUrl(attachment.href)!} title={attachment.name} />
                      </div>
                    ))}
                  </div>
                </div> */}
              </>
            }
          />
        </CardColumn>
      </CardGrid>
    </>
  );
}

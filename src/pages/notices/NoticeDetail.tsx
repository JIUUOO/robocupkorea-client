import { useParams } from "react-router-dom";

import CardContainer from "@/components/common/card/CardContainer";
import CardItem from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";
import { useFetchNoticeDetail } from "@/hooks/notices/useFetchNoticeDetail";
import LinkButton from "@/components/common/button/LinkButton";
import buildApiBaseUrl from "@/utils/buildApiBaseUrl";

export default function NoticeDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchNoticeDetail(id!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details</div>;

  return (
    <>
      <CardContainer>
        <CardItem>
          <Card
            title={data?.title}
            subtitle={
              <div className="flex h-7 w-7 items-center justify-center rounded bg-black">
                <span className="text-white">{data?.attachments.length}</span>
              </div>
            }
            content={
              <>
                <div>{data?.date}</div>
                <div>{data?.content}</div>
                <div className="flex flex-col gap-2">
                  <div className="r-text-2xl font-semibold">첨부파일</div>
                  <div className="flex flex-wrap gap-2">
                    {data?.attachments.map((attachment) => (
                      <div key={attachment.name} className="flex">
                        <LinkButton external={true} to={buildApiBaseUrl(attachment.href)!} title={attachment.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            }
          />
        </CardItem>
      </CardContainer>
    </>
  );
}

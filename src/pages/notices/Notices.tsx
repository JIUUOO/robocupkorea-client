import LinkButton from "@/components/common/button/LinkButton";
import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardItem from "@/components/common/card/CardItem";
import SectionHeader from "@/components/common/SectionHeader";
import { useFetchNotices } from "@/hooks/notices/useFetchNotices";

export default function Notices() {
  const { data, isLoading, isError } = useFetchNotices();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading</div>;

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
                footer={<LinkButton title="자세히 보기" to={notice.id} align="center" />}
              />
            </CardItem>
          ))}
        </CardContainer>
      </SectionHeader>
    </>
  );

  // <div className="text-xl">{data?.notices?.[0].id}</div>;
}

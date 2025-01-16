import { useFetchNoticeDetail } from "@/hooks/notices/useFetchNoticeDetail";
import { useParams } from "react-router-dom";

export default function NoticeDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchNoticeDetail(id!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details</div>;

  return (
    <div>
      <div>{data?.title}</div>
    </div>
  );
}

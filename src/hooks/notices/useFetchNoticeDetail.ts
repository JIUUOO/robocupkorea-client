import { useQuery } from "@tanstack/react-query";

import { fetchNoticeDetail } from "@/api/notices";
import { NoticeResponse } from "@/types/notices/NoticeDetailResponse";

export function useFetchNoticeDetail(id: string) {
  return useQuery<NoticeResponse>({
    queryKey: ["noticeDetail"],
    queryFn: () => fetchNoticeDetail(id),
  });
}

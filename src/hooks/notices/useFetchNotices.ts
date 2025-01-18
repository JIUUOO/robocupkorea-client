import { useQuery } from "@tanstack/react-query";

import { fetchNotices } from "@/api/notices";
import { NoticesResponse } from "@/types/notices/NoticesResponse";

export function useFetchNotices() {
  return useQuery<NoticesResponse>({
    queryKey: ["notices"],
    queryFn: () => fetchNotices(),
  });
}

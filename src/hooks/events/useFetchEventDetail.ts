import { useQuery } from "@tanstack/react-query";

import { fetchEventDetail } from "@/api/events";
import { EventDetailResponse } from "@/types/events/EventDetailResponse";

export function useFetchEventDetail(id: string) {
  return useQuery<EventDetailResponse>({
    queryKey: ["eventDetail", id],
    queryFn: () => fetchEventDetail(id!),
  });
}

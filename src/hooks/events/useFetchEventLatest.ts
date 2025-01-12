import { useQuery } from "@tanstack/react-query";

import { fetchEventLatest } from "@/api/events";
import { EventLatestResponse } from "@/types/events/EventLatestResponse";

export function useFetchEventLatest() {
  return useQuery<EventLatestResponse>({
    queryKey: ["eventLatest"],
    queryFn: () => fetchEventLatest(),
  });
}

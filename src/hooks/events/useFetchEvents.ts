import { useQuery } from "@tanstack/react-query";

import { fetchEvents } from "@/api/events";
import { EventsResponse } from "@/types/events/EventsResponse";

export function useFetchEvents() {
  return useQuery<EventsResponse>({
    queryKey: ["events"],
    queryFn: () => fetchEvents(),
  });
}

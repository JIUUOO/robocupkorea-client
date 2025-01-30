import { useQuery } from "@tanstack/react-query";

import { fetchLeagueAttachmentsMeta } from "@/api/leagues";
import { LeagueAttachmentsMetaResponse } from "@/types/leagues/LeagueAttachmentsMetaResponse";

export function useLeagueAttachmentsMeta(id: string) {
  return useQuery<LeagueAttachmentsMetaResponse>({
    queryKey: ["leagueAttachmentsMeta"],
    queryFn: () => fetchLeagueAttachmentsMeta(id),
  });
}

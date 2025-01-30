import { instance } from "@/api/client";

export async function fetchLeagueAttachmentsMeta(id: string) {
  try {
    const response = await instance.get(`/api/leagues/${id}/attachments/meta`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

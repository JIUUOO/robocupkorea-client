import { instance } from "@/api/client";

export async function fetchNotices() {
  try {
    const response = await instance.get("/api/notices/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNoticeDetail(id: string) {
  try {
    const response = await instance.get(`/api/notice/${id}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

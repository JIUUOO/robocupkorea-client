import { instance } from "@/api/client";

export async function fetchNotices() {
  try {
    const response = await instance.get("/api/notices/");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

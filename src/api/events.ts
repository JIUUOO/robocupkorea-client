import { instance } from "@/api/client";

export async function fetchEvents() {
  try {
    const response = await instance.get("/api/events/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchEventLatest() {
  try {
    const response = await instance.get("/api/events/latest/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchEventDetail(id: string) {
  try {
    const response = await instance.get(`/api/events/${id}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

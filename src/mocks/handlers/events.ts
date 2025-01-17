import { http, delay, HttpResponse } from "msw";

export const eventsMockHandler = http.get("/api/events/", async () => {
  await delay(1000);

  return HttpResponse.json({
    events: [
      {
        id: "robocup-open-2025",
        title: "제13회 한국로보컵오픈",
        images: ["https://robocupkorea.org/banners/2025_RCOPEN_Poster.jpg"],
      },
      {
        id: "creative-coding-2024",
        title: "제5회 한국창의코딩대회",
        images: ["https://robocupkorea.org/banners/2025_RCOPEN_Poster.jpg"],
      },
    ],
  });
});

export const eventLatestMockHandler = http.get("/api/events/latest/", async () => {
  await delay(1000);

  return HttpResponse.json({
    id: "robocup-open-2025",
    title: "제13회 한국로보컵오픈",
    dates: ["2025-02-14", "2025-02-16"],
    location: "강원특별자치도 평창군 알펜시아리조트 컨벤션센터",
  });
});

export const eventDetailMockHandler = http.get("/api/events/:id/", async () => {
  await delay(1000);

  return HttpResponse.json({
    id: "robocup-open-2025",
    title: "제13회 한국로보컵오픈",
    dates: ["2025-02-14", "2025-02-16"],
    location: "강원특별자치도 평창군 알펜시아리조트 컨벤션센터",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6707396701577!2d128.67222717587808!3d37.656944272015245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35618af4a4d08733%3A0x619f3b940306c8a8!2sAlpensia%20Convention%20Centre!5e0!3m2!1sen!2sus!4v1736433602269!5m2!1sen!2sus",
    images: [
      "https://robocupkorea.org/banners/2025_RCOPEN_Poster.jpg",
      "https://robocupkorea.org/banners/2025_RCOPEN.jpg",
    ],
    others: [
      {
        title: "레고랜드",
        description: "레고랜드를 방문하세요",
      },
      {
        title: "티셔츠",
        description: "티셔츠를 제공해요",
      },
    ],
    leagues: [
      "RCJ_SOCCER_LW",
      "RCJ_SOCCER_OPEN",
      "RCJ_RESUE_LINE",
      "RCJ_ONSTAGE",
      "RCAP_AUTO_DRIVING",
      "RCAP_COSPACE_RESCUE",
      "RCJK_RESCUE_BASIC",
      "RCJK_RESCUE_MAZE_BASIC",
    ],
  });
});

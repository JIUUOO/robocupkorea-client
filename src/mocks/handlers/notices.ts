import { http, delay, HttpResponse } from "msw";

export const noticesMockHandler = http.get("/api/notices/", async () => {
  await delay(1000);

  return HttpResponse.json({
    notices: [
      {
        id: "sdfsdfsdfasdg123124e",
        date: "2025-01-01",
        author: "RCKA",
        title: "이벤트 공지",
        content: "테스트",
        attachmentCount: 0,
      },
      {
        id: "sdfsdfsdfasdg1231124e",
        date: "2025-01-01",
        author: "RCKA",
        title: "테스트",
        content: "테스트",
        attachmentCount: 2,
      },
    ],
  });
});

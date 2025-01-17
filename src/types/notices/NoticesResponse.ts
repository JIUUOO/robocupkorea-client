export type NoticeResponse = {
  id: string;
  date: string;
  author: string;
  title: string;
  content: string;
  attachmentsCount: number;
};

export type NoticesResponse = {
  notices: NoticeResponse[];
};

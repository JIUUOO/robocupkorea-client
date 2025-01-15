export type NoticeResponse = {
  id: string;
  date: string;
  author: string;
  title: string;
  content: string;
  attachmentCount: number;
};

export type NoticesResponse = {
  notices: NoticeResponse[];
};

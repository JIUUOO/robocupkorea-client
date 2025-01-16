import { Attachment } from "@/types/Attachment";

export type NoticeResponse = {
  id: string;
  date: string;
  author: string;
  title: string;
  content: string;
  attachment: Attachment[];
};

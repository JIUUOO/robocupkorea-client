import { Lang } from "@/types/Lang";

export default function isValidLang(value: string | null): value is Lang {
  return value === "ko-KR" || value === "en-US";
}

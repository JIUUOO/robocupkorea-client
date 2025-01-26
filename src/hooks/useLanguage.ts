import { Lang } from "@/types/Lang";

export function useLanguage() {
  const params = new URLSearchParams(window.location.search);
  const language = params.get("lang");

  const setLanguage = (newLang: Lang) => {
    params.set("lang", newLang); // 쿼리 스트링 업데이트

    window.location.href = `/?${params.toString()}`; // URL 변경 후 페이지 새로고침
  };

  return { language, setLanguage };
}

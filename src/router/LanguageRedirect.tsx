import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "@/hooks/useLanguage";
import { Lang } from "@/types/Lang";
import isValidLang from "@/utils/isValidLang";

interface LanguageRedirectProps {
  children: JSX.Element;
}

export default function LanguageRedirect({ children }: LanguageRedirectProps) {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");

    if (!isValidLang(lang)) {
      const browserLanguage: Lang = navigator.language.startsWith("en") ? "en-US" : "ko-KR";
      setLanguage(browserLanguage); // Zustand로 상태 업데이트
      params.set("lang", browserLanguage);

      const hash = location.hash || ""; // hash 처리
      navigate(`${location.pathname}?${params.toString()}${hash}`, { replace: true });
    } else {
      setLanguage(lang); // 쿼리 스트링의 언어를 Zustand 상태에 반영
    }
  }, [language, location, navigate, setLanguage]);

  return children;
}

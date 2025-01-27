import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import isValidLang from "@/utils/isValidLang";

export default function LanguageRedirect({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");

    if (!isValidLang(lang)) {
      // 브라우저 언어 감지
      const browserLanguage = navigator.language.startsWith("ko") ? "ko-KR" : "en-US";

      // 쿼리 스트링에 언어 추가
      params.set("lang", browserLanguage);

      // 중복 리다이렉션 방지 (현재 URL이 이미 변경될 URL과 동일한지 확인)
      const newUrl = `${location.pathname}?${params.toString()}`;
      if (newUrl !== `${location.pathname}${location.search}`) {
        navigate(newUrl, { replace: true });
      }
    }
  }, [location.pathname, location.search, navigate]);

  return children;
}

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

      params.set("lang", browserLanguage);

      // 쿼리 스트링을 추가한 URL로 리다이렉팅
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [location, navigate]);

  return children;
}

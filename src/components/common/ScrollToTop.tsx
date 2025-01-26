import { useLenis } from "lenis/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis && !hash) {
      lenis.scrollTo(0, {
        immediate: true, // 관성 없이 즉시 초기화
      });
    }
  }, [pathname, hash, lenis]);

  return null;
}

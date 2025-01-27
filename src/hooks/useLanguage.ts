import { useLanguageStore } from "@/store/languageStore";

export function useLanguage() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  return { language, setLanguage };
}

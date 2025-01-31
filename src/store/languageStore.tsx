import { create } from "zustand";

import { Lang } from "@/types/Lang";

interface LanguageState {
  language: Lang;
  setLanguage: (language: Lang) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "ko-KR", // 언어 초기화
  setLanguage: (language: Lang) => set({ language }),
}));

import { create } from "zustand";

import { Lang } from "@/types/Lang";

interface LanguageState {
  language: Lang;
  setLanguage: (language: Lang) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en-US",
  setLanguage: (language) => set({ language }),
}));

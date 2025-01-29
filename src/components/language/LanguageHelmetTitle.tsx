import { Helmet } from "react-helmet-async";

import { useLanguage } from "@/hooks/useLanguage";

interface LanguageHelmetTitleProps {
  title: string;
}

export default function LanguageHelmetTitle({ title }: LanguageHelmetTitleProps) {
  const { language } = useLanguage();

  if (language === "ko-KR")
    return (
      <Helmet prioritizeSeoTags>
        <title>{title} | 한국로보컵협회</title>
      </Helmet>
    );

  if (language === "en-US")
    return (
      <Helmet prioritizeSeoTags>
        <title>{title} | RCKA</title>
      </Helmet>
    );
}

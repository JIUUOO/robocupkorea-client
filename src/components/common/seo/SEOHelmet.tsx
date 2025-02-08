import { Helmet } from "react-helmet-async";

import { useLanguage } from "@/hooks/useLanguage";

const metaContentMap = {
  "ko-KR": {
    lang: "ko",
    description:
      "사단법인 한국로보컵협회는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다.",
    keywords: "로보컵, 한국로보컵협회, RoboCup, RCKA, 로봇, 대회",
    author: "한국로보컵협회",
    copyright: "©한국로보컵협회. All rights reserved.",
    siteName: "한국로보컵협회",
    locale: "ko_KR",
  },
  "en-US": {
    lang: "en",
    description:
      "RoboCup Korea Association (RCKA) is a non-profit organization that hosts national and international RoboCup League events, fostering project-based robotics education for students.",
    keywords: "RoboCup, RCKA, Robot, Competition",
    author: "RCKA",
    copyright: "RCKA. All rights reserved.",
    siteName: "RCKA",
    locale: "en_US",
  },
};

export default function SEOHelmet() {
  const { language } = useLanguage();
  const meta = metaContentMap[language];

  return (
    <Helmet prioritizeSeoTags>
      <html lang={meta.lang} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <meta name="copyright" content={meta.copyright} />

      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:locale" content={meta.locale} />

      <meta name="twitter:description" content={meta.description} />

      <link rel="alternate" href="https://robocupkorea.org/?lang=ko-KR" hrefLang="ko" />
      <link rel="alternate" href="https://robocupkorea.org/?lang=en-US" hrefLang="en" />
      <link rel="alternate" href="https://robocupkorea.org/" hrefLang="x-default" />

      <link rel="canonical" href="https://robocupkorea.org/" />
    </Helmet>
  );
}

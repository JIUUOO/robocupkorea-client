import { Helmet } from "react-helmet-async";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageHelmet() {
  const { language } = useLanguage();

  if (language === "ko-KR")
    return (
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          content="사단법인 한국로보컵협회는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다."
        />
        <meta name="keywords" content="로보컵, 한국로보컵협회, RoboCup, RCKA, 로봇, 대회" />

        <meta name="author" content="한국로보컵협회" />
        <meta name="copyright" content="©한국로보컵협회. All rights reserved." />

        <meta property="og:title" content="한국로보컵협회" />
        <meta
          property="og:description"
          content="사단법인 한국로보컵협회는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다."
        />
        <meta property="og:site_name" content="한국로보컵협회" />
        <meta property="og:locale" content="ko_KR" />

        <meta name="twitter:title" content="한국로보컵협회" />
        <meta
          name="twitter:description"
          content="사단법인 한국로보컵협회는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다."
        />
      </Helmet>
    );
  else if (language === "en-US")
    return (
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          content="RoboCup Korea Association (RCKA) is a non-profit organization that hosts national and international RoboCup League events, fostering project-based robotics education for students."
        />
        <meta name="keywords" content="RoboCup, RCKA, Robot, Competition" />

        <meta name="author" content="RCKA" />
        <meta name="copyright" content="RCKA. All rights reserved." />

        <meta property="og:title" content="RCKA" />
        <meta
          property="og:description"
          content="RoboCup Korea Association (RCKA) is a non-profit organization that hosts national and international RoboCup League events, fostering project-based robotics education for students."
        />
        <meta property="og:site_name" content="RCKA" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:title" content="RCKA" />
        <meta
          name="twitter:description"
          content="RoboCup Korea Association (RCKA) is a non-profit organization that hosts national and international RoboCup League events, fostering project-based robotics education for students."
        />
      </Helmet>
    );
}

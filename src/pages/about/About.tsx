import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";
import LinkButton from "@/components/common/button/LinkButton";
import MailtoButton from "@/components/common/button/MailtoButton";
import Intro from "@/components/about/Intro";
import Committee from "@/components/about/Committee";
import History from "@/components/about/History";
import News from "@/components/about/News";
import { newsData } from "@/data/about/newsData";
import { useLanguage } from "@/hooks/useLanguage";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function About() {
  const { language } = useLanguage();
  const location = useLocation();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const targetElement = document.getElementById(hash);

      if (targetElement) {
        const offsetTop = windowWidth >= 768 ? targetElement.offsetTop - 125 : targetElement.offsetTop - 90;

        window.scrollTo({
          top: offsetTop,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  if (language === "ko-KR")
    return (
      <>
        <Helmet>
          <title>About | 한국로보컵협회</title>
        </Helmet>

        {/* Introduction */}
        <div id="introduction">
          <CardContainer>
            <CardGroup>
              <Card
                title={["An Annual", "International", "Robotics Competition"]}
                content={<Intro />}
                varient="introduce"
              />
            </CardGroup>
          </CardContainer>
        </div>

        {/* Committee */}
        <div id="committee">
          <CardContainer>
            <CardGroup>
              <Card
                title={["Promoting", "AI and Robotics", "Research"]}
                content={<Committee />}
                footer={
                  <LinkButton
                    to="https://www.1365.go.kr/vols/P9140/srvcinfo/volsDnttInfo.do?type=show&nanmmbyId=28584910"
                    external={true}
                    title="자원봉사 모집 확인하기"
                    icon="arrow-up-right"
                    align="center"
                  />
                }
                varient="introduce"
              />
            </CardGroup>
          </CardContainer>
        </div>

        {/* History */}
        <div id="history">
          <CardContainer>
            <CardGroup>
              <Card title="History" subtitle="Since 2013" content={<History />} divider={true} varient="introduce" />
            </CardGroup>
          </CardContainer>
        </div>

        {/* News */}
        <div id="news">
          <CardContainer>
            <CardGroup colspan="col-span-1">
              <Card title="News" subtitle={newsData.length} content={<News />} divider={true} varient="introduce" />
            </CardGroup>
          </CardContainer>
        </div>

        {/* Sponsor */}
        <div id="sponsor">
          <CardContainer>
            <CardGroup>
              <Card
                title="Sponsor"
                content="후원금은 로봇 꿈나무들을 양성하고 AI 및 로보틱스 교육의 증진을 위한 다양한 목적에 사용됩니다."
                footer={<MailtoButton email="x_iah@naver.com" title="후원 문의" align="center" />}
                varient="introduce"
              />
            </CardGroup>
          </CardContainer>
        </div>
      </>
    );

  if (language === "en-US")
    return (
      <>
        <Helmet>
          <title>About | RCKA</title>
        </Helmet>

        {/* Introduction */}
        <div id="introduction" className="h-full w-full">
          <CardContainer>
            <CardGroup>
              <Card
                title={["An Annual", "International", "Robotics Competition"]}
                content={<Intro />}
                varient="introduce"
              />
            </CardGroup>
          </CardContainer>
        </div>

        {/* Committee */}
        <div id="committee" className="h-full w-full">
          <CardContainer>
            <CardGroup>
              <Card
                title={["Promoting", "AI and Robotics", "Research"]}
                content={<Committee />}
                footer={
                  <LinkButton
                    to="https://www.1365.go.kr/vols/P9140/srvcinfo/volsDnttInfo.do?type=show&nanmmbyId=28584910"
                    external={true}
                    title="Check Volunteer Opportunities"
                    icon="arrow-up-right"
                    align="center"
                  />
                }
                varient="introduce"
              />
            </CardGroup>
          </CardContainer>
        </div>

        {/* History */}
        <div id="history" className="h-full w-full">
          <CardContainer>
            <CardGroup>
              <Card title="History" subtitle="Since 2013" content={<History />} divider={true} varient="introduce" />
            </CardGroup>
          </CardContainer>
        </div>

        {/* News */}
        {/* <div id="news" className="h-full w-full">
          <CardContainer>
            <CardGroup colspan="col-span-1">
              <Card title="News" subtitle={newsData.length} content={<News />} divider={true} varient="introduce" />
            </CardGroup>
          </CardContainer>
        </div> */}

        {/* Sponsor */}
        <div id="sponsor" className="h-full w-full">
          <CardContainer>
            <CardGroup>
              <Card
                title="Sponsor"
                content="Sponsorship funds are dedicated to nurturing future roboticists and advancing AI and robotics education."
                footer={<MailtoButton email="x_iah@naver.com" title="Become a Sponsor" align="center" />}
                varient="introduce"
              />
            </CardGroup>
          </CardContainer>
        </div>
      </>
    );
}

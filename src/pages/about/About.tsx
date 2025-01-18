import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);

      const hash = window.location.hash.substring(1);
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 125;
        window.scrollTo({
          top: offsetTop,
          // behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <>
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
                  icon={true}
                  direction="up-right"
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

      {/* Sponser */}
      <div id="sponser">
        <CardContainer>
          <CardGroup>
            <Card
              title="Sponser"
              content="후원금은 로봇 꿈나무들을 양성하고 AI 및 로보틱스 교육의 증진을 위한 다양한 목적에 사용됩니다."
              footer={<MailtoButton email="x_iah@naver.com" title="후원 문의" align="center" />}
              varient="introduce"
            />
          </CardGroup>
        </CardContainer>
      </div>
    </>
  );
}

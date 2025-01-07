import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardGroup";
import Card from "@/components/common/card/Card";
import LinkButton from "@/components/common/button/LinkButton";
import MailtoButton from "@/components/common/button/MailtoButton";
import Intro from "@/components/about/Intro";
import Committee from "@/components/about/Committee";
import History from "@/components/about/History";

export default function About() {
  return (
    <>
      <CardContainer>
        <CardGroup>
          <Card title={["An Annual", "International", "Robotics Competition"]} description={<Intro />} />
        </CardGroup>
      </CardContainer>

      <CardContainer>
        <CardGroup>
          <Card title={["Promoting", "AI and Robotics", "Research"]} description={<Committee />} />
          <LinkButton
            to="https://www.1365.go.kr/vols/P9140/srvcinfo/volsDnttInfo.do?type=show&nanmmbyId=28584910"
            external={true}
            title="자원봉사 모집 확인하기"
            icon={true}
            direction="up-right"
            align="center"
          />
        </CardGroup>
      </CardContainer>

      <CardContainer>
        <CardGroup>
          <Card title="History" subtitle="Since 2013" description={<History />} />
        </CardGroup>
      </CardContainer>

      <CardContainer>
        <CardGroup>
          <Card
            title="Sponser"
            description="후원금은 로봇 꿈나무들을 양성하고 AI 및 로보틱스 교육의 증진을 위한 다양한 목적에 사용됩니다."
          />
          <MailtoButton email="x_iah@naver.com" title="후원 문의" align="center" />
        </CardGroup>
      </CardContainer>
    </>
  );
}

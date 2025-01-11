import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";
import History from "@/components/home/History";
import LinkButton from "@/components/common/button/LinkButton";

export default function Home() {
  return (
    <>
      <CardContainer>
        <CardGroup>
          <Card
            title="An Annual International Robotics Competition"
            content="사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵(RoboCup) 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다."
            footer={<LinkButton to="/about" title="한국로보컵협회 소개" icon={true} />}
            varient="introduce"
          />
        </CardGroup>
      </CardContainer>

      <CardContainer gridcols="lg:grid-cols-5">
        <CardGroup colspan="col-span-3">
          <Card
            title="Promoting AI and Robotics Research"
            content="양질의 다양한 AI·로봇 교육 제공에 뜻을 같이 하는 교육 관련 종사자와 자원봉사자들로 구성된 비영리 기관입니다."
            footer={<LinkButton to="/about" title="운영위원 소개" icon={true} />}
            varient="introduce"
          />
        </CardGroup>
        <CardGroup colspan="col-span-2">
          <Card
            title="Sponser"
            content="후원금은 로봇 꿈나무들을 양성하고 AI 및 로보틱스 교육의 증진을 위한 다양한 목적에 사용됩니다."
            footer={<LinkButton to="/about" title="후원 문의" align="center" />}
            varient="introduce"
          />
        </CardGroup>
      </CardContainer>

      <CardContainer>
        <CardGroup>
          <Card
            title="History"
            subtitle="Since 2013"
            content={<History />}
            footer={<LinkButton to="/about" title="연혁 더보기" icon={true} />}
            varient="introduce"
          />
        </CardGroup>
      </CardContainer>

      <CardContainer gridcols="lg:grid-cols-2">
        <CardGroup colspan="col-span-1">
          <Card
            title="News"
            subtitle="0"
            content={<div className="h-20"></div>}
            footer={<LinkButton to="/about" title="보도자료 더보기" icon={true} align="center" />}
            varient="introduce"
          />
        </CardGroup>
        <CardGroup colspan="col-span-1">
          <Card
            title="Notice"
            subtitle="0"
            content={<div className="h-20"></div>}
            footer={<LinkButton to="/about" title="공지사항 더보기" icon={true} align="center" />}
            varient="introduce"
          />
        </CardGroup>
      </CardContainer>

      <CardContainer>
        <CardGroup>
          <Card
            title="Contact"
            content="중요 업데이트와 공지사항 정보를 알려드립니다."
            footer={<LinkButton to="" external={true} title="이메일 등록하기" icon={true} />}
            varient="introduce"
          />
        </CardGroup>
      </CardContainer>
    </>
  );
}

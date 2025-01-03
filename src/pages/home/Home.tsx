import LandingVideo from "@/components/about/LandingVideo";
import LandingSection from "@/components/about/LandingSection";
import CardGroup from "@/components/common/card/CardGroup";
import Card from "@/components/common/card/Card";
import History from "@/components/about/History";
import Institution from "@/components/about/Institution";

export default function Home() {
  return (
    <>
      <LandingVideo />
      <LandingSection />
      <div className="relative mt-[100vh] flex flex-col gap-10 bg-neutral pt-8">
        <CardGroup>
          <Card
            title="An Annual International Robotics Competition"
            description="사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵(RoboCup) 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다."
            to="/about"
            label="한국로보컵협회 소개 ->"
          />
        </CardGroup>
        <CardGroup>
          <Card
            span="col-span-8"
            title="Promoting AI and Robotics Research"
            description="양질의 다양한 AI·로봇 교육 제공에 뜻을 같이 하는 교육 관련 종사자와 자원봉사자들로 구성된 비영리 기관입니다."
            to="/about"
            label="운영위원 소개 ->"
          />
          <Card
            span="col-span-4"
            title="Sponser"
            description="후원금은 로봇 꿈나무들을 양성하고 AI 및 로보틱스 교육의 증진을 위한 다양한 목적에 사용됩니다."
            align="justify-center"
            to="/about"
            label="후원 문의"
          />
        </CardGroup>
        <CardGroup>
          <Card title="History" subtitle="Since 2013" element={<History />} to="/about" label="연혁 더보기 ->" />
        </CardGroup>
        <CardGroup>
          <Card
            span="col-span-6"
            title="News"
            description=""
            align="justify-center"
            to="/news"
            label="보도자료 더보기"
          />
          <Card
            span="col-span-6"
            title="Notice"
            description=""
            align="justify-center"
            to="/notice"
            label="공지사항 더보기"
          />
        </CardGroup>
        <CardGroup>
          <Card title="Institutions" element={<Institution />} />
        </CardGroup>
        <CardGroup>
          <Card
            title="Contact"
            description="중요 업데이트와 공지사항 정보를 알려드립니다."
            to="null"
            label="이메일 등록하기 ->"
          />
        </CardGroup>
      </div>
    </>
  );
}

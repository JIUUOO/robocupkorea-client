import CardGrid from "@/components/common/card/CardGrid";
import CardColumn from "@/components/common/card/CardColumn";
import Card from "@/components/common/card/Card";
import History from "@/components/about/History";
import News from "@/components/about/News";
import LinkButton from "@/components/common/button/LinkButton";
import { newsDataCount } from "@/data/about/newsData";
import { useLanguage } from "@/hooks/useLanguage";
import SEOTitle from "@/components/common/seo/SEOTitle";
import { certificateData } from "@/data/about/certificateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { language } = useLanguage();

  switch (language) {
    case "ko-KR":
      return (
        <>
          <SEOTitle />

          <CardGrid>
            <CardColumn>
              <Card
                title="An Annual International Robotics Competition"
                content="사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵(RoboCup) 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다."
                footer={
                  <LinkButton
                    to={`/about${location.search}#introduction`}
                    title="한국로보컵협회 소개"
                    icon="arrow-right"
                  />
                }
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          <CardGrid gridcols="lg:grid-cols-3">
            <CardColumn colspan="col-span-2">
              <Card
                title="Promoting AI and Robotics Research"
                content="양질의 다양한 AI·로봇 교육 제공에 뜻을 같이 하는 교육 관련 종사자와 자원봉사자들로 구성된 비영리 기관입니다."
                footer={
                  <LinkButton to={`/about${location.search}#committee`} title="운영위원 소개" icon="arrow-right" />
                }
                varient="introduce"
              />
            </CardColumn>
            <CardColumn colspan="col-span-1">
              <Card
                title="Sponsor"
                content="후원금은 로봇 꿈나무들을 양성하고 AI 및 로보틱스 교육의 증진을 위한 다양한 목적에 사용됩니다."
                footer={<LinkButton to={`/about${location.search}#sponsor`} title="후원 문의" align="center" />}
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          <CardGrid>
            <CardColumn>
              <Card
                title="History"
                subtitle="Since 2013"
                content={<History count={3} />}
                divider={true}
                footer={<LinkButton to={`/about${location.search}#history`} title="연혁 더보기" icon="arrow-right" />}
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          <CardGrid>
            <CardColumn colspan="col-span-1">
              <Card
                title="News"
                subtitle={newsDataCount}
                content={<News />}
                divider={true}
                footer={<LinkButton to={`/about${location.search}#news`} title="보도자료 더보기" icon="arrow-right" />}
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          {/* <CardGrid>
        <CardColumn>
          <Card
            title="Notices"
            subtitle="0"
            content={<div className="h-20"></div>}
            divider={true}
            footer={<LinkButton to="/about" title="공지사항 더보기" icon="arrow-right" />}
            varient="introduce"
          />
        </CardColumn>
      </CardGrid> */}

          {/* <CardGrid>
        <CardColumn>
          <Card
            title="Contact"
            content="중요 업데이트와 공지사항 정보를 알려드립니다."
            footer={<LinkButton to="" external={true} title="이메일 등록하기" icon="arrow-right" direction="up-right" />}
            varient="introduce"
          />
        </CardColumn>
      </CardGrid> */}

          <CardGrid>
            <CardColumn>
              <Card
                title="Certificate of Education"
                content={
                  <>
                    <div className="text-gray-700 mb-8 text-lg leading-relaxed">
                      본 교육원은 한국로보컵협회의 다양한 로봇 및 AI 교육 기회를 제공하고, 청소년들이 로보컵을 통해 로봇
                      및 AI 기술 관련 능력과 역량을 형성할 수 있도록 한국로보컵협회가 지원하는 로봇 교육원입니다.
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                      {certificateData.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col items-center gap-2 rounded border border-gray bg-white p-4 shadow-sm"
                        >
                          <div className="r-text-3xl flex items-center justify-center text-primary">
                            <FontAwesomeIcon icon={faCertificate} />
                          </div>
                          <div className="r-text-lg text-gray-800 break-keep text-center font-medium">{item.name}</div>
                        </div>
                      ))}
                    </div>
                  </>
                }
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>
        </>
      );

    case "en-US":
      return (
        <>
          <SEOTitle />

          <CardGrid>
            <CardColumn>
              <Card
                title="An Annual International Robotics Competition"
                content="RoboCup Korea Association (RCKA) is a non-profit organization that hosts national and international RoboCup League events, fostering project-based robotics education for students."
                footer={
                  <LinkButton
                    to={`/about${location.search}#introduction`}
                    title="Introducing RCKA"
                    icon="arrow-right"
                  />
                }
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          <CardGrid gridcols="lg:grid-cols-3">
            <CardColumn colspan="col-span-2">
              <Card
                title="Promoting AI and Robotics Research"
                content="We are a non-profit organization of educators and volunteers committed to delivering high-quality and diverse AI and robotics education."
                footer={
                  <LinkButton
                    to={`/about${location.search}#committee`}
                    title="Introducing Committee"
                    icon="arrow-right"
                  />
                }
                varient="introduce"
              />
            </CardColumn>
            <CardColumn colspan="col-span-1">
              <Card
                title="Sponsor"
                content="Sponsorship funds are dedicated to nurturing future roboticists and advancing AI and robotics education."
                footer={<LinkButton to={`/about${location.search}#sponsor`} title="Become a Sponsor" align="center" />}
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          <CardGrid>
            <CardColumn>
              <Card
                title="History"
                subtitle="Since 2013"
                content={<History count={3} />}
                divider={true}
                footer={<LinkButton to={`/about${location.search}#history`} title="View History" icon="arrow-right" />}
                varient="introduce"
              />
            </CardColumn>
          </CardGrid>

          {/* <CardGrid>
          <CardColumn colspan="col-span-1">
            <Card
              title="News"
              subtitle={newsDataCount}
              content={<News />}
              divider={true}
              footer={<LinkButton to="/about#news" title="View Press Releases" icon="arrow-right" />}
              varient="introduce"
            />
          </CardColumn>
        </CardGrid> */}

          {/* <CardGrid>
        <CardColumn>
          <Card
            title="Notices"
            subtitle="0"
            content={<div className="h-20"></div>}
            divider={true}
            footer={<LinkButton to="/about" title="공지사항 더보기" icon="arrow-right" />}
            varient="introduce"
          />
        </CardColumn>
      </CardGrid> */}

          {/* <CardGrid>
        <CardColumn>
          <Card
            title="Contact"
            content="중요 업데이트와 공지사항 정보를 알려드립니다."
            footer={<LinkButton to="" external={true} title="이메일 등록하기" icon="arrow-right" direction="up-right" />}
            varient="introduce"
          />
        </CardColumn>
      </CardGrid> */}
        </>
      );
  }
}

import { useParams } from "react-router-dom";
import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import { leaguesData, LeagueKeys, LeagueDetailData } from "@/data/leagues/leaguesData";
import SectionHeader from "@/components/common/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";

export default function LeagueDetail() {
  const { id } = useParams<{ id: LeagueKeys }>();
  const { language } = useLanguage();

  if (!id) {
    return <div>Page not found</div>;
  }

  const leagueDetailData: LeagueDetailData = leaguesData[id];

  if (language === "ko-KR")
    return (
      <>
        <SectionHeader title={leagueDetailData.parent}>
          <CardContainer>
            <CardGroup>
              <Card
                title={leagueDetailData.title}
                content={
                  <>
                    <div className="r-text-xl font-semibold">개요</div>
                    {leagueDetailData.preview}
                    {leagueDetailData.content[language]}
                    <div className="r-text-xl font-semibold">규정</div>
                  </>
                }
              />
            </CardGroup>
          </CardContainer>
        </SectionHeader>
      </>
    );

  if (language === "en-US")
    return (
      <>
        <SectionHeader title={leagueDetailData.parent}>
          <CardContainer>
            <CardGroup>
              <Card
                title={leagueDetailData.title}
                content={
                  <>
                    <div className="r-text-xl font-semibold">Introduction</div>
                    {leagueDetailData.preview}
                    {leagueDetailData.content[language]}
                    <div className="r-text-xl font-semibold">Rule</div>
                  </>
                }
              />
            </CardGroup>
          </CardContainer>
        </SectionHeader>
      </>
    );
}

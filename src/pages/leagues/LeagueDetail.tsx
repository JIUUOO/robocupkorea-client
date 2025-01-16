import { useParams } from "react-router-dom";
import LinkButton from "@/components/common/button/LinkButton";
import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import { leaguesData, LeagueKeys, LeagueDetailData } from "@/data/leagues/leaguesData";
import SectionHeader from "@/components/common/SectionHeader";
import Thumbnail from "@/components/leagues/Thumbnail";

export default function LeagueDetail() {
  const { id } = useParams<{ id: LeagueKeys }>();

  if (!id) {
    return <div>Page not found</div>;
  }

  const leagueDetailData: LeagueDetailData = leaguesData[id];

  return (
    <>
      <SectionHeader title={leagueDetailData.parent}>
        <CardContainer>
          <CardGroup>
            <Card
              title={leagueDetailData.title}
              content={
                <>
                  <Thumbnail src={leagueDetailData.thumbnail} />
                  {leagueDetailData.content}
                  <div className="r-text-2xl font-semibold">규정</div>
                  <LinkButton to="" external={true} title="규정 살펴보기" />
                </>
              }
            />
          </CardGroup>
        </CardContainer>
      </SectionHeader>
    </>
  );
}

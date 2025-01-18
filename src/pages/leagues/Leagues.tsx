import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import LinkButton from "@/components/common/button/LinkButton";
import Thumbnail from "@/components/leagues/Thumbnail";
import { leaguesData, LeagueDetailData } from "@/data/leagues/leaguesData";
import SectionHeader from "@/components/common/SectionHeader";

export default function Leagues() {
  const groupedLeagues: Record<string, Array<[string, LeagueDetailData]>> = {};

  Object.entries(leaguesData).forEach(([leagueId, leagueDetailData]) => {
    const parent = leagueDetailData.parent;
    if (!groupedLeagues[parent]) {
      groupedLeagues[parent] = [];
    }
    groupedLeagues[parent].push([leagueId, leagueDetailData]);
  });

  return (
    <>
      {Object.entries(groupedLeagues).map(([parent, items]) => (
        <SectionHeader key={parent} title={parent}>
          <CardContainer gridcols="lg:grid-cols-2">
            {items.map(([leagueId, leagueDetailData]) => (
              <CardGroup key={leagueId} colspan="col-span-1">
                <Card
                  title={leagueDetailData.title}
                  content={
                    <>
                      <div className="text-base">{leagueDetailData.content}</div>
                      <Thumbnail src={leagueDetailData.thumbnail} />
                    </>
                  }
                  footer={<LinkButton to={`/leagues/${leagueId}`} title="종목 살펴보기" icon={true} />}
                />
              </CardGroup>
            ))}
          </CardContainer>
        </SectionHeader>
      ))}
    </>
  );
}

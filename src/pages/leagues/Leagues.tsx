import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import LinkButton from "@/components/common/button/LinkButton";
import { leaguesData, LeagueDetailData } from "@/data/leagues/leaguesData";
import SectionToggle from "@/components/common/SectionToggle";
import { useState } from "react";

export default function Leagues() {
  const initialToggleStates = Object.values(leaguesData).reduce(
    (acc, { parent }) => {
      acc[parent] = false;
      return acc;
    },
    {} as Record<string, boolean>,
  );

  const [toggleStates, setToggleStates] = useState(initialToggleStates);

  const handleToggle = (parent: string) => {
    setToggleStates((prev) => ({
      ...prev,
      [parent]: !prev[parent],
    }));
  };

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
        <SectionToggle key={parent} title={parent} isOpen={toggleStates[parent]} onClick={() => handleToggle(parent)}>
          <CardContainer gridcols="lg:grid-cols-2">
            {items.map(([leagueId, leagueDetailData]) => (
              <CardGroup key={leagueId} colspan="col-span-1">
                <Card
                  title={leagueDetailData.title}
                  content={leagueDetailData.preview}
                  footer={<LinkButton to={`/leagues/${leagueId}`} title="종목 살펴보기" icon={true} />}
                />
              </CardGroup>
            ))}
          </CardContainer>
        </SectionToggle>
      ))}
    </>
  );
}

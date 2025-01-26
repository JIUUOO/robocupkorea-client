import { useState } from "react";
import { motion } from "motion/react";

import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import LinkButton from "@/components/common/button/LinkButton";
import { leaguesData, LeagueDetailData } from "@/data/leagues/leaguesData";
import SectionToggle from "@/components/common/SectionToggle";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: toggleStates[parent] ? 1 : 0,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            exit={{ opacity: 0 }}
          >
            <CardContainer gridcols="lg:grid-cols-2">
              <CardGroup colspan="col-span-1" gap="sm">
                {items.map(([leagueId, leagueDetailData]) => (
                  <Card
                    key={leagueId}
                    title={leagueDetailData.title}
                    content={leagueDetailData.preview}
                    footer={<LinkButton to={`/leagues/${leagueId}`} title="종목 살펴보기" icon={true} />}
                  />
                ))}
              </CardGroup>
            </CardContainer>
          </motion.div>
        </SectionToggle>
      ))}
    </>
  );
}

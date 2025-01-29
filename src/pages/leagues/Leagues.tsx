import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardItem from "@/components/common/card/CardItem";
import LinkButton from "@/components/common/button/LinkButton";
import { leaguesData, LeagueDetailData, LeagueKeys } from "@/data/leagues/leaguesData";
import SectionToggle from "@/components/common/SectionToggle";
import { useLanguage } from "@/hooks/useLanguage";

export default function Leagues() {
  const { language } = useLanguage();

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

  const groupedLeagues: { [key: string]: [string, LeagueDetailData][] } = {};

  // leaguesData를 순회하며 그룹화
  Object.entries(leaguesData).forEach(([leagueId, leagueDetailData]) => {
    const parent = leagueDetailData.parent;

    // parent별로 그룹화된 배열이 없다면 초기화
    if (!groupedLeagues[parent]) {
      groupedLeagues[parent] = [];
    }

    // 해당 parent 그룹에 leagueDetailData 추가
    groupedLeagues[parent].push([leagueId, leagueDetailData]);
  });

  if (language === "ko-KR")
    return (
      <>
        <Helmet>
          <title>Leagues | 한국로보컵협회</title>
        </Helmet>

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
              className="h-full w-full"
            >
              <CardContainer gridcols="lg:grid-cols-2">
                {items.map(([leagueId, leagueDetailData]) => {
                  const league = leaguesData[leagueId as LeagueKeys];

                  return (
                    <CardItem key={leagueId} colspan="col-span-1" gap="sm">
                      <Card
                        title={leagueDetailData.title}
                        content={
                          <>
                            {leagueDetailData.preview}
                            <p>{league.content[language].props?.children?.[0]?.props?.children.slice(0, 52)}...</p>
                          </>
                        }
                        footer={
                          <LinkButton
                            to={`/leagues/${leagueId}${location.search}`}
                            title="종목 살펴보기"
                            icon="arrow-right"
                          />
                        }
                      />
                    </CardItem>
                  );
                })}
              </CardContainer>
            </motion.div>
          </SectionToggle>
        ))}
      </>
    );

  if (language === "en-US")
    return (
      <>
        <Helmet>
          <title>Leagues | RCKA</title>
        </Helmet>

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
              className="h-full w-full"
            >
              <CardContainer gridcols="lg:grid-cols-2">
                {items.map(([leagueId, leagueDetailData]) => {
                  const league = leaguesData[leagueId as LeagueKeys];

                  return (
                    <CardItem key={leagueId} colspan="col-span-1" gap="sm">
                      <Card
                        title={leagueDetailData.title}
                        content={
                          <>
                            {leagueDetailData.preview}
                            <p>{league.content[language].props?.children?.[0]?.props?.children.slice(0, 52)}...</p>
                          </>
                        }
                        footer={
                          <LinkButton
                            to={`/leagues/${leagueId}${location.search}`}
                            title="Explore League"
                            icon="arrow-right"
                          />
                        }
                      />
                    </CardItem>
                  );
                })}
              </CardContainer>
            </motion.div>
          </SectionToggle>
        ))}
      </>
    );
}

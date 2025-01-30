import { useParams } from "react-router-dom";

import Card from "@/components/common/card/Card";
import CardGrid from "@/components/common/card/CardGrid";
import CardColumn from "@/components/common/card/CardColumn";
import { leaguesData, LeagueKeys, LeagueDetailData } from "@/data/leagues/leaguesData";
import CardHeader from "@/components/common/card/CardHeader";
import { useLanguage } from "@/hooks/useLanguage";
import SEOTitle from "@/components/common/seo/SEOTitle";
import LinkButton from "@/components/common/button/LinkButton";
import { useLeagueAttachmentsMeta } from "@/hooks/leagues/useLeagueAttachmentsMeta";

export default function LeagueDetail() {
  const { id } = useParams<{ id: LeagueKeys }>();
  const leagueDetailData: LeagueDetailData = leaguesData[id!];
  const { data, isLoading, isError } = useLeagueAttachmentsMeta(id!);
  const { language } = useLanguage();

  switch (language) {
    case "ko-KR":
      return (
        <>
          <SEOTitle title={leagueDetailData.title} />

          <CardHeader title={leagueDetailData.parent}>
            <CardGrid>
              <CardColumn>
                <Card
                  title={leagueDetailData.title}
                  content={
                    <>
                      <div className="r-text-xl font-semibold">개요</div>
                      {leagueDetailData.preview}
                      {leagueDetailData.content[language]}
                      <div className="r-text-xl font-semibold">규정</div>
                      {data?.attachments[0].name}
                      {!isLoading &&
                        !isError &&
                        data?.attachments.map((attachment) => (
                          <LinkButton to={attachment.href} title={attachment.name} />
                        ))}
                    </>
                  }
                />
              </CardColumn>
            </CardGrid>
          </CardHeader>
        </>
      );

    case "en-US":
      return (
        <>
          <SEOTitle title={leagueDetailData.title} />

          <CardHeader title={leagueDetailData.parent}>
            <CardGrid>
              <CardColumn>
                <Card
                  title={leagueDetailData.title}
                  content={
                    <>
                      <div className="r-text-xl font-semibold">Introduction</div>
                      {leagueDetailData.preview}
                      {leagueDetailData.content[language]}
                      <div className="r-text-xl font-semibold">Rule</div>
                      {!isLoading &&
                        !isError &&
                        data?.attachments.map((attachment) => (
                          <LinkButton to={attachment.href} title={attachment.name} />
                        ))}
                    </>
                  }
                />
              </CardColumn>
            </CardGrid>
          </CardHeader>
        </>
      );
  }
}

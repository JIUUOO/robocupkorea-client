import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardGroup";

import rcHumanoid from "@/assets/videos/rc-humanoid.mp4";
import rcjSoccerLightweight from "@/assets/videos/rcj-soccer-lightweight.mp4";
import rcjSoccerOpen from "@/assets/videos/rcj-soccer-open.mp4";
import rcjRescueLine from "@/assets/videos/rcj-rescue-line.mp4";
import rcjOnstage from "@/assets/videos/rcj-onstage.mp4";
import rcapAutonomousDrivingU12 from "@/assets/videos/rcap-autonomous-driving-u12.mp4";
import rcapAutonomousDrivingU19 from "@/assets/videos/rcap-autonomous-driving-u19.mp4";
import rcapCospaceRescueU12 from "@/assets/videos/rcap-cospace-rescue-u12.mp4";
import rcapCospaceRescueU19 from "@/assets/videos/rcap-cospace-rescue-u19.mp4";
import basicRescueBasicU12 from "@/assets/videos/basic-rescue-basic-u12.mp4";
import basicRescueBasicU19 from "@/assets/videos/basic-rescue-basic-u19.mp4";
import basicMazebasicU12 from "@/assets/videos/basic-mazebasic-u12.mp4";
import basicMazebasicU19 from "@/assets/videos/basic-mazebasic-u19.mp4";

import LinkButton from "@/components/common/button/LinkButton";
import Thumbnail from "@/components/leagues/Thumbnail";

export default function Leagues() {
  return (
    <>
      <div className="container">
        <div className="r-text-3xl font-semibold">RoboCup League</div>
      </div>

      <CardContainer>
        <CardGroup colspan="col-span-5">
          <Card
            title="Humanoid"
            fontSize="2xl"
            description={
              <>
                <div className="r-text-base">휴머노이드는...</div>
                <Thumbnail src={rcHumanoid} />
              </>
            }
          />
          <LinkButton to="/leagues/rc-humanoid" title="종목 살펴보기" icon={true} />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">RoboCupJunior League</div>
      </div>

      <CardContainer>
        <CardGroup colspan="col-span-5">
          <Card
            title="Soccer LightWeight"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcjSoccerLightweight} />
              </>
            }
          />
          <LinkButton to="/leagues/rcj-soccer-lightweight" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="Soccer Open"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcjSoccerOpen} />
              </>
            }
          />
          <LinkButton to="/leagues/rcj-soccer-open" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="Rescue Line"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcjRescueLine} />
              </>
            }
          />
          <LinkButton to="/leagues/rcj-rescue-line" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="OnStage"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcjOnstage} />
              </>
            }
          />
          <LinkButton to="/leagues/rcj-onstage" title="종목 살펴보기" icon={true} />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">RCAP League</div>
      </div>

      <CardContainer>
        <CardGroup colspan="col-span-5">
          <Card
            title="CoSpace Autonomous Driving, U12"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcapAutonomousDrivingU12} />
              </>
            }
          />
          <LinkButton to="/leagues/rcap-cospace-autonomous-driving-u12" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="CoSpace Autonomous Driving, U19"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcapAutonomousDrivingU19} />
              </>
            }
          />
          <LinkButton to="/leagues/rcap-cospace-autonomous-driving-u19" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="CoSpace Rescue, U12"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcapCospaceRescueU12} />
              </>
            }
          />
          <LinkButton to="/leagues/rcap-cospace-rescue-u12" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="CoSpace Rescue, U19"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={rcapCospaceRescueU19} />
              </>
            }
          />
          <LinkButton to="/leagues/rcap-cospace-rescue-u19" title="종목 살펴보기" icon={true} />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">Basic League</div>
      </div>

      <CardContainer>
        <CardGroup colspan="col-span-5">
          <Card
            title="Rescue Basic, U12"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={basicRescueBasicU12} />
              </>
            }
          />
          <LinkButton to="/leagues/basic-rescue-basic-u12" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="Rescue Basic, U19"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={basicRescueBasicU19} />
              </>
            }
          />
          <LinkButton to="/leagues/basic-rescue-basic-u19" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="Rescue MazeBasic, U12"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={basicMazebasicU12} />
              </>
            }
          />
          <LinkButton to="/leagues/basic-rescue-mazebasic-u12" title="종목 살펴보기" icon={true} />
        </CardGroup>

        <CardGroup colspan="col-span-5">
          <Card
            title="Rescue MazeBasic, U19"
            fontSize="2xl"
            description={
              <>
                <Thumbnail src={basicMazebasicU19} />
              </>
            }
          />
          <LinkButton to="/leagues/basic-rescue-mazebasic-u19" title="종목 살펴보기" icon={true} />
        </CardGroup>
      </CardContainer>
    </>
  );
}

import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";

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

      <CardContainer gridcols="lg:grid-cols-2">
        <CardGroup colspan="col-span-1">
          <Card
            title="Humanoid"
            content={
              <>
                <div className="r-text-base">휴머노이드는...</div>
                <Thumbnail src={rcHumanoid} />
              </>
            }
            footer={<LinkButton to="/leagues/rc-humanoid" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">RoboCupJunior League</div>
      </div>

      <CardContainer gridcols="lg:grid-cols-2">
        <CardGroup colspan="col-span-1">
          <Card
            title="Soccer LightWeight"
            content={
              <>
                <Thumbnail src={rcjSoccerLightweight} />
              </>
            }
            footer={<LinkButton to="/leagues/rcj-soccer-lightweight" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="Soccer Open"
            content={
              <>
                <Thumbnail src={rcjSoccerOpen} />
              </>
            }
            footer={<LinkButton to="/leagues/rcj-soccer-open" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="Rescue Line"
            content={
              <>
                <Thumbnail src={rcjRescueLine} />
              </>
            }
            footer={<LinkButton to="/leagues/rcj-rescue-line" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="OnStage"
            content={
              <>
                <Thumbnail src={rcjOnstage} />
              </>
            }
            footer={<LinkButton to="/leagues/rcj-onstage" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">RCAP League</div>
      </div>

      <CardContainer gridcols="lg:grid-cols-2">
        <CardGroup colspan="col-span-1">
          <Card
            title="CoSpace Autonomous Driving, U12"
            content={
              <>
                <Thumbnail src={rcapAutonomousDrivingU12} />
              </>
            }
            footer={<LinkButton to="/leagues/rcap-cospace-autonomous-driving-u12" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="CoSpace Autonomous Driving, U19"
            content={
              <>
                <Thumbnail src={rcapAutonomousDrivingU19} />
              </>
            }
            footer={<LinkButton to="/leagues/rcap-cospace-autonomous-driving-u19" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="CoSpace Rescue, U12"
            content={
              <>
                <Thumbnail src={rcapCospaceRescueU12} />
              </>
            }
            footer={<LinkButton to="/leagues/rcap-cospace-rescue-u12" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="CoSpace Rescue, U19"
            content={
              <>
                <Thumbnail src={rcapCospaceRescueU19} />
              </>
            }
            footer={<LinkButton to="/leagues/rcap-cospace-rescue-u19" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">Basic League</div>
      </div>

      <CardContainer gridcols="lg:grid-cols-2">
        <CardGroup colspan="col-span-1">
          <Card
            title="Rescue Basic, U12"
            content={
              <>
                <Thumbnail src={basicRescueBasicU12} />
              </>
            }
            footer={<LinkButton to="/leagues/basic-rescue-basic-u12" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="Rescue Basic, U19"
            content={
              <>
                <Thumbnail src={basicRescueBasicU19} />
              </>
            }
            footer={<LinkButton to="/leagues/basic-rescue-basic-u19" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="Rescue MazeBasic, U12"
            content={
              <>
                <Thumbnail src={basicMazebasicU12} />
              </>
            }
            footer={<LinkButton to="/leagues/basic-rescue-mazebasic-u12" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>

        <CardGroup colspan="col-span-1">
          <Card
            title="Rescue MazeBasic, U19"
            content={
              <>
                <Thumbnail src={basicMazebasicU19} />
              </>
            }
            footer={<LinkButton to="/leagues/basic-rescue-mazebasic-u19" title="종목 살펴보기" icon={true} />}
          />
        </CardGroup>
      </CardContainer>
    </>
  );
}

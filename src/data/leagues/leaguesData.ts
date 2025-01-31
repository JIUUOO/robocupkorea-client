import { humanoidData } from "@/data/leagues/rcs/humanoidData";
import { standardPlatformData } from "@/data/leagues/rcs/standardPlatformData";
import { middleSizeData } from "@/data/leagues/rcs/middleSizeData";
import { smallSizeData } from "@/data/leagues/rcs/smallSizeData";
import { rcsSimulationData } from "@/data/leagues/rcs/rcsSimulationData";
import { robotData } from "@/data/leagues/rcr/robotData";
import { rcrSimulationData } from "@/data/leagues/rcr/rcrSimulationData";
import { openPlatformData } from "@/data/leagues/rch/openPlatformData";
import { domesticStandardPlatformData } from "@/data/leagues/rch/domesticStandardPlatformData";
import { socialStandardPlatformData } from "@/data/leagues/rch/socialStandardPlatformData";
import { roboCupAtWorkData } from "@/data/leagues/rci/roboCupAtWorkData";
import { logisticsData } from "@/data/leagues/rci/logisticsData";
import { soccerData } from "@/data/leagues/rcj/soccerData";
import { onstageData } from "@/data/leagues/rcj/onstageData";
import { rescueData } from "@/data/leagues/rcj/rescueData";
import { cospaceAutonomousDrivingData } from "@/data/leagues/rcap/cospaceAutonomousDrivingData";
import { cospaceResuceData } from "@/data/leagues/rcap/cospaceResuceData";
import { rescuebasicData } from "@/data/leagues/rcjk/rescuebasicData";
import { rescueMazebasicData } from "@/data/leagues/rcjk/rescueMazebasicData";

export const leaguesData = {
  "rcs-humanoid": humanoidData,
  "rcs-standard-platform": standardPlatformData,
  "rcs-middle-size": middleSizeData,
  "rcs-small-size": smallSizeData,
  "rcs-simulation": rcsSimulationData,
  "rcr-robot": robotData,
  "rcr-simulation": rcrSimulationData,
  "rch-open-platform": openPlatformData,
  "rch-domestic-standard-platform": domesticStandardPlatformData,
  "rch-social-standard-platform": socialStandardPlatformData,
  "rci-robocup-at-work": roboCupAtWorkData,
  "rci-logistics": logisticsData,
  "rcj-soccer": soccerData,
  "rcj-onstage": onstageData,
  "rcj-rescue": rescueData,
  "rcap-cospace-autonomous-driving": cospaceAutonomousDrivingData,
  "rcap-cospace-rescue": cospaceResuceData,
  "rcjk-rescuebasic": rescuebasicData,
  "rcjk-rescue-mazebasic": rescueMazebasicData,
};

export type LeagueKeys = keyof typeof leaguesData;

interface Content {
  "ko-KR": React.ReactNode;
  "en-US": React.ReactNode;
}

export interface LeagueDetailData {
  parent: string;
  title: string;
  preview: React.ReactNode;
  content: Content;
}

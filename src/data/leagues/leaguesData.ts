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
import { onStageData } from "@/data/leagues/rcj/onStageData";
import { rescueData } from "@/data/leagues/rcj/rescueData";

export const leaguesData = {
  "rcs-humanoid": humanoidData,
  "rcs-standardPlatform": standardPlatformData,
  "rcs-middleSize": middleSizeData,
  "rcs-smallSize": smallSizeData,
  "rcs-simulation": rcsSimulationData,
  "rcr-robot": robotData,
  "rcr-simulation": rcrSimulationData,
  "rch-openPlatform": openPlatformData,
  "rch-domesticStandardPlatform": domesticStandardPlatformData,
  "rch-socialStandardPlatform": socialStandardPlatformData,
  "rci-roboCupAtWork": roboCupAtWorkData,
  "rci-logistics": logisticsData,
  "rcj-soccer": soccerData,
  "rcj-onStage": onStageData,
  "rcj-rescue": rescueData,
};

export type LeagueKeys = keyof typeof leaguesData;

export interface LeagueDetailData {
  parent: string;
  title: string;
  image: string;
  content: string[];
  rule: string;
}

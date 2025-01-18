import { humanoidData } from "@/data/leagues/rcs/humanoidData";
import { soccerLightweightData } from "./rcj/soccerLightweightData";
import { soccerOpenData } from "./rcj/soccerOpenData";
import { rescueLineData } from "./rcj/rescueLineData";
import { onstageData } from "./rcj/onstageData";
import { cospaceAutonomousDrivingFSData } from "./rcap/cospaceAutonomousDrivingFSData";
import { cospaceAutonomousDrivingU12Data } from "./rcap/cospaceAutonomousDrivingU12Data";
import { cospaceAutonomousDrivingU19Data } from "./rcap/cospaceAutonomousDrivingU19Data";
import { cospaceRescueU12Data } from "./rcap/cospaceRescueU12Data";
import { cospaceRescueU19Data } from "./rcap/cospaceRescueU19Data";
import { rescueBasicU12Data } from "./rcjk/rescueBasicU12Data";
import { rescueBasicU19Data } from "./rcjk/rescueBasicU19Data";
import { rescueMazeBasicU12Data } from "./rcjk/rescueMazeBasicU12Data";
import { rescueMazeBasicU19Data } from "./rcjk/rescueMazeBasicU19Data";

export const leaguesData = {
  "rcs-humanoid": humanoidData,
  "rcj-soccer-lightweight": soccerLightweightData,
  "rcj-soccer-open": soccerOpenData,
  "rcj-rescue-line": rescueLineData,
  "rcj-onstage": onstageData,
  "rcap-cospace-autonomous-driving-fs": cospaceAutonomousDrivingFSData,
  "rcap-cospace-autonomous-driving-u12": cospaceAutonomousDrivingU12Data,
  "rcap-cospace-autonomous-driving-u19": cospaceAutonomousDrivingU19Data,
  "rcap-cospace-rescue-u12": cospaceRescueU12Data,
  "rcap-cospace-rescue-u19": cospaceRescueU19Data,
  "rcjk-rescue-basic-u12": rescueBasicU12Data,
  "rcjk-rescue-basic-u19": rescueBasicU19Data,
  "rcjk-rescue-mazebasic-u12": rescueMazeBasicU12Data,
  "rcjk-rescue-mazebasic-u19": rescueMazeBasicU19Data,
} as const;

export type LeagueKeys = keyof typeof leaguesData;

export interface LeagueDetailData {
  parent: string;
  title: string;
  thumbnail: string;
  content: string[];
  rule: string;
}

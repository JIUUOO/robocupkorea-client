import { LeagueDetailData } from "@/data/leagues/leaguesData";
import humanoidThumbnail from "@/assets/videos/leagues/rcs/humanoid.mp4";

export const humanoidData: LeagueDetailData = {
  parent: "RoboCupSoccer",
  title: "Humanoid",
  thumbnail: humanoidThumbnail,
  content: [
    "Humanoid League에서는 인간과 같은 신체구조와 인간과 같은 인지능력을 가진 자율 로봇이 서로 축구 경기를 합니다. 일반적인 휴머노이드 로봇의 구조와는 달리 축구 경기장에 특화된 감지 작업과 주변환경 모델링 설계가 요구됩니다. 축구 경기 뿐만 아니라 기술적인 챌린지가 있을 수 있습니다.",
    "Humanoid League에서는 로봇이 균형을 유지하면서 역동적인 걷기, 달리기, 공의 시각적 인식, 다른 선수, 필드, 자기 위치 파악, 팀 플레이 등 많은 연구가 필요합니다.",
  ],
  rule: "",
};

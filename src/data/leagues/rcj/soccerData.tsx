import soccerImage from "@/assets/images/leagues/rcj/soccer.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const soccerData = {
  parent: "RoboCupJunior",
  title: "Soccer",
  preview: (
    <>
      <ImageReferenced src={soccerImage} origin="" />
    </>
  ),
  content: (
    <>
      <p className="r-text-base">
        Humanoid League에서는 인간과 유사한 구조와 인간과 유사한 센서를 가진 자율 로봇이 서로 축구를 합니다. 일반적인
        휴머노이드 로봇과는 달리 범위 센서를 사용하여 보다 정교하게 경기장을 인식합니다. 일반적인 축구 규칙을 잘 따를 수
        있는 "휴머노이드" 로봇을 구현하는 것이 큰 과제 입니다.
      </p>
      <p className="r-text-base">
        휴머노이드 리그에서 연구된 많은 주요 구현 기능 중에는 균형유지, 걷고 뛰기, 공 인식, 공을 차기, 필드 인식하기,
        자기 위치 파악, 상대 로봇과 우리 팀 로봇 인식, 팀 플레이가 있습니다. Humanoid League에서는 위 기능이 구현된 세계
        최고의 자율 휴머노이드 로봇 팀들이 경쟁합니다.
      </p>
    </>
  ),
};

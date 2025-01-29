import humanoidImage from "@/assets/images/leagues/rcs/humanoid.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const humanoidData = {
  parent: "RoboCupSoccer",
  title: "Humanoid",
  preview: (
    <>
      <ImageReferenced src={humanoidImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          Humanoid League에서는 인간과 같은 신체구조와 인간과 같은 인지능력을 가진 자율 로봇이 서로 축구 경기를 하는
          종목입니다. 일반적인 휴머노이드 로봇의 구조와는 달리 축구 경기장에 특화된 감지 작업과 주변환경 모델링 설계가
          요구됩니다. 추가적으로 축구 경기 외의 기술적 챌린지가 존재할 수 있습니다.
        </p>
        <p className="r-text-base">
          Humanoid League에서는 로봇이 균형을 유지하면서 역동적인 걷기, 달리기, 공의 시각적 인식, 다른 선수, 필드, 자기
          위치 파악, 팀 플레이 등 다양한 기술 연구가 요구됩니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          In the Humanoid League, autonomous robots with human-like body structures and cognitive abilities compete in
          soccer matches. Unlike typical humanoid robot structures, this competition requires specialized sensing tasks
          and environmental modeling designed for the soccer field. Additionally, there may be technical challenges
          beyond the soccer matches themselves.
        </p>
        <p className="r-text-base">
          The Humanoid League requires robots to research and develop various technologies such as maintaining balance
          while dynamically walking and running, visually recognizing the ball, identifying other players and the field,
          self-localization, and executing team play strategies.
        </p>
      </>
    ),
  },
};

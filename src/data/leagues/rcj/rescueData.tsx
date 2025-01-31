import rescueImage from "@/assets/images/leagues/rcj/rescue.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const rescueData = {
  parent: "RoboCupJunior",
  title: "Rescue",
  preview: (
    <>
      <ImageReferenced src={rescueImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          Rescue는 탐색 및 구조 소프트웨어를 구현하는 종목입니다. 구조 시나리오를 제공받으면 요구조자를 탐색 및 구출하기
          위한 소프트웨어를 개발해 구조자의 능력이 부여되는 지능형 에이전트 및 로봇을 구현합니다.
        </p>
        <p className="r-text-base">
          주어진 환경에서 시뮬레이션을 하며 로봇의 하드웨어와 소프트웨어에 대한 객관적인 평가를 하며, 연구자 간의 협력을
          목표로 합니다.
        </p>
        <p className="r-text-base">
          로봇은 평평한 표면에서의 선 추적부터 고르지 않은 지형의 장애물을 통과해 안전지역에 이르기까지 복잡한 재난
          시나리오에서 요구조자를 식별해 안전한 공간에 운반하는 것을 목표로 합니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          Rescue is a competition category focused on implementing search and rescue software. Given a rescue scenario,
          teams develop software to locate and evacuate victims, creating intelligent agents and robots equipped with
          rescuing capabilities.
        </p>
        <p className="r-text-base">
          The competition involves simulations in predefined environments to objectively evaluate both the hardware and
          software of the robots while fostering collaboration among researchers.
        </p>
        <p className="r-text-base">
          Robots must navigate complex disaster scenarios, from line-tracking on flat surfaces to overcoming obstacles
          on rough terrain, ultimately identifying victims and safely transporting them to secure areas.
        </p>
      </>
    ),
  },
};

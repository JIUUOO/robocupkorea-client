import smallSizeImage from "@/assets/images/leagues/rcs/smallSize.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const smallSizeData = {
  parent: "RoboCupSoccer",
  title: "Small Size",
  preview: (
    <>
      <ImageReferenced src={smallSizeImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          Small Size League 또는 F180 리그는 가장 오래된 로보컵 축구 리그 중 하나입니다. 중앙 집중식/분산식 시스템을
          갖춘 환경에서 지능적인 멀티 로봇/에이전트 협력 및 제어 시스템 구현에 중점을 둡니다.
        </p>
        <p className="r-text-base">
          Small Size League는 각각 6대의 로봇으로 한 팀을 이루어 경기합니다. 각 로봇은 F180 규칙에 명시된 치수를 따라야
          합니다. 로봇은 직경 180mm 원 안에 들어맞아야 하고 15cm보다 커야 합니다. 로봇은 가로 6m, 세로 9m의 녹색 카펫이
          깔린 필드에서 오렌지색 골프공을 가지고 축구를 합니다.
        </p>
        <p className="r-text-base">
          경기장의 모든 물체는 경기장 위에 위치한 카메라 바에 부착된 4개의 카메라에 의해 감지되고, 제공되는 데이터로
          SSL-Vision이 추적합니다. SSL-Vision은 Small Size League가 제공하는 오픈 소스 프로젝트 비전 시스템입니다.
        </p>
        <p className="r-text-base">
          팀별 오프필드 컴퓨터가 로봇의 조정 및 제어를 처리하며, 로봇과 컴퓨터가 무선 송수신 장치로 통신합니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          The Small Size League, also known as the F180 League, is one of the oldest RoboCup soccer leagues. It focuses
          on implementing intelligent multi-robot/agent coordination and control systems in centralized and
          decentralized environments.
        </p>
        <p className="r-text-base">
          In the Small Size League, each team consists of six robots. Each robot must comply with the dimensions
          specified in the F180 rules. Robots must fit within a 180mm diameter circle and be taller than 15cm. Matches
          are played on a green carpeted field measuring 6m by 9m using an orange golf ball.
        </p>
        <p className="r-text-base">
          All objects on the field are detected by four cameras mounted on a camera bar above the field, and the data is
          processed by SSL-Vision, an open-source vision system provided by the Small Size League.
        </p>
        <p className="r-text-base">
          Each team's off-field computer handles the coordination and control of the robots, while communication between
          the robots and the computer is done via wireless transmission.
        </p>
      </>
    ),
  },
};

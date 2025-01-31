import middleSizeImage from "@/assets/images/leagues/rcs/middleSize.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const middleSizeData = {
  parent: "RoboCupSoccer",
  title: "Middle Size",
  preview: (
    <>
      <ImageReferenced src={middleSizeImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          Middle Soccer League는 5개의 완전 자율 로봇으로 한 팀을 이루어 일반 크기의 FIFA 축구공을 가지고 축구를 합니다.
          팀들은 자유롭게 하드웨어를 설계할 수 있지만 모든 센서가 탑재되어야 하며 로봇에 최대 크기와 무게 제한이
          있습니다. 연구의 초점은 계획 및 인식 수준에서 메카트로닉스 설계, 제어 및 다중 에이전트 협력에 있습니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          In the Middle Soccer League, teams consist of five fully autonomous robots playing soccer with a
          standard-sized FIFA soccer ball. Teams are free to design their hardware, but all necessary sensors must be
          integrated, and there are strict size and weight limitations for the robots. The focus of research lies in
          mechatronics design, control, and multi-agent cooperation at the planning and perception levels.
        </p>
      </>
    ),
  },
};

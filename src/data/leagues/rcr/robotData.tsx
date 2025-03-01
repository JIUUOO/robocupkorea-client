import robotImage from "@/assets/images/leagues/rcr/robot.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const robotData = {
  parent: "RoboCupRescue",
  title: "Robot",
  preview: (
    <>
      <ImageReferenced src={robotImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          도심 수색 구조(Urban Search And Rescue) 로봇 대회의 목표는 수색 및 구조 애플리케이션과 관련된 문제를 접하고,
          대표적인 환경에서 로봇 구현에 대한 객관적인 평가를 받으며, 연구자 간의 협력을 증진하는 것입니다.
        </p>
        <p className="r-text-base">
          로봇이 이동성, 센서 인식, 구출 설계, 매핑 및 실제 운영자 인터페이스에서 능력을 입증하는 동시에 변수가 많은
          환경에서 요구조자를 탐색해야 합니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          The goal of the Urban Search and Rescue (USAR) robot competition is to address challenges related to search
          and rescue applications, receive an objective evaluation of robot implementation in representative
          environments, and promote collaboration among researchers.
        </p>
        <p className="r-text-base">
          Robots must demonstrate their capabilities in mobility, sensor perception, rescue design, mapping, and real
          operator interface while navigating complex and variable environments to locate victims.
        </p>
      </>
    ),
  },
};

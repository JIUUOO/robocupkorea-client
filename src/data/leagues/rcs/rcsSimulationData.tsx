import simulationImage from "@/assets/images/leagues/rcs/simulation.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const rcsSimulationData = {
  parent: "RoboCupSoccer",
  title: "Simulation",
  preview: (
    <>
      <ImageReferenced src={simulationImage} origin="" />
    </>
  ),
  content: (
    <>
      <p className="r-text-base">
        Simulation League는 RoboCup Soccer에서 가장 오래된 리그 중 하나입니다. 시뮬레이션 리그는 인공지능과 팀 전략에
        중점을 둡니다. 독립적으로 움직이는 소프트웨어 플레이어(에이전트)는 컴퓨터 안의 가상 필드에서 축구를 합니다. 서브
        리그는 2D와 3D 두 가지입니다.
      </p>
      <p className="r-text-base">
        2D Simulation League에서는 11개의 자율 소프트웨어 프로그램(에이전트)으로 구성된 두 팀이 각각 SoccerServer라고
        불리는 중앙 서버의 2차원 가상 축구 경기장에서 경기를 진행합니다. 이 서버는 게임에 대한 모든 것, 즉 모든
        플레이어와 공의 현재 위치, 물리 엔진 정보 등을 알고 있습니다. 서버와 각 에이전트 간의 통신이 게임을 좌우합니다.
        각 플레이어는 가상 센서(시각, 음향 및 물리 엔진)의 상대적이고 환경에서 경기를 하기 위해 몇 가지 기본 명령(대시,
        회전 또는 발차기)을 수행해 경기를 진행합니다.
      </p>
      <p className="r-text-base">
        3D Simulation League는 높이 차원과 더 복잡한 물리엔진을 추가함으로써 현실성을 높였습니다. 처음에 사용 가능한
        로봇 모델은 구형 에이전트뿐이었습니다. 2006년에는 후지쯔 HOAP-2 로봇의 간단한 모델이 출시되었는데, 시뮬레이션
        리그에서 휴머노이드 모델이 처음으로 사용된 것입니다. 3D Simulation League의 목적을 축구를 하는 전략적 행동의
        설계에서 낮은 수준의 휴머노이드 로봇 설계, 개발까지 발전했습니다.
      </p>
    </>
  ),
};

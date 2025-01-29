import simulationImage from "@/assets/images/leagues/rcr/simulation.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const rcrSimulationData = {
  parent: "RoboCupRescue",
  title: "Simulation",
  preview: (
    <>
      <ImageReferenced src={simulationImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          Rescue Simulation 리그의 목적은 두 가지입니다. 첫째, 시뮬레이션 시스템의 인프라를 형성하고 실제 재난상황에서
          우세한 현상을 구현하는 시뮬레이터 개발을 목표로 합니다. 둘째, 재난 대응 시나리오에서 구조의 역할이 주어지는
          지능형 에이전트와 로봇 개발을 목표로 합니다.
        </p>
        <p className="r-text-base">
          자연 재해는 대규모의 경제적, 인적, 환경적 손실을 야기하는 사건들입니다. 자연 재해는 보통 예측하기가 어려워
          발생하는 것을 방지하는 것은 훨씬 더 어렵습니다. 이러한 특성들 때문에, 자연재해가 발생했을 때 피해를 완화하기
          위한 재해 관리 전략은 중요합니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          The Rescue Simulation League has two main objectives. First, it aims to establish an infrastructure for
          simulation systems and develop simulators that replicate critical phenomena observed in real disaster
          situations. Second, it focuses on developing intelligent agents and robots tasked with rescue operations in
          disaster response scenarios.
        </p>
        <p className="r-text-base">
          Natural disasters cause significant economic, human, and environmental losses. They are often unpredictable,
          making it extremely difficult to prevent their occurrence. Due to these characteristics, disaster management
          strategies play a crucial role in mitigating the impact of natural disasters when they occur.
        </p>
      </>
    ),
  },
};

import cospaceAutonomousDrivingImage from "@/assets/images/leagues/rcap/cospace-autonomous-driving.webp";
import ImageReferecne from "@/components/common/image/ImageReferenced";

export const cospaceAutonomousDrivingData = {
  parent: "RoboCupAsiaPacific",
  title: "CoSpace Autonomous Driving",
  preview: (
    <>
      <ImageReferecne
        src={cospaceAutonomousDrivingImage}
        origin="https://qingdao2024.robocupap.org/rcap-cospace-autonomous-driving-firststeps/"
      />
    </>
  ),
  content: (
    <>
      <p className="r-text-base">
        RCAP CoSpace 자율주행 챌린지는 스마트 시티에서의 경로 계획(path planning)에 초점을 맞춘 대회입니다.
      </p>
      <p className="r-text-base">
        이 대회에서 팀들은 자율주행 차량을 프로그래밍하여 스마트 시티의 실제 환경과 가상 환경(CoSpace)을 모두 탐색하도록
        해야 합니다.
      </p>
    </>
  ),
};

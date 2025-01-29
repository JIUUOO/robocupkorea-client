import cospaceResuceImage from "@/assets/images/leagues/rcap/cospace-rescue.webp";
import ImageReferecne from "@/components/common/image/ImageReferenced";

export const cospaceResuceData = {
  parent: "RoboCupAsiaPacific",
  title: "CoSpace Resuce",
  preview: (
    <>
      <ImageReferecne
        src={cospaceResuceImage}
        origin="https://qingdao2024.robocupap.org/rcap-education-cospace-rescue/"
      />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          팀들은 가상 환경에서 서로 다른 객체를 탐색하고 수집하며 이동할 수 있도록, 실제 및 가상 자율 로봇 모두를 위한
          전략을 개발해야 합니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          팀들은 가상 환경에서 서로 다른 객체를 탐색하고 수집하며 이동할 수 있도록, 실제 및 가상 자율 로봇 모두를 위한
          전략을 개발해야 합니다.
        </p>
      </>
    ),
  },
};

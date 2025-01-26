import onstageImage from "@/assets/images/leagues/rcj/onstage.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const onstageData = {
  parent: "RoboCupJunior",
  title: "OnStage",
  preview: (
    <>
      <ImageReferenced src={onstageImage} origin="" />
    </>
  ),
  content: (
    <>
      <p className="r-text-base">
        OnStage의 팀들은 창의적이고 자율적으로 로봇들을 디자인하고, 제작하고, 프로그래밍합니다. 다양한 기술을 사용해
        라이브 또는 스트리밍된 로봇 공연을 만들어 청중들에게 보여주는 것 입니다. 춤, 연극, 뮤지컬 등을 구상해 공연하는
        것을 목표로 합니다.
      </p>
      <p className="r-text-base">
        OnStage는 개방적인 종목입니다. 팀들은 창의적으로 공연을 구상하고 혁신적으로 로봇을 구현해 청중들을 즐겁게 하도록
        노력합니다. 모든 팀은 TDP(Technical Description Poster), 기술 시연(Technical Demonstration), 인터뷰(Technical
        Interview), 온스테이지 퍼포먼스(OnStage Performance) 등의 분야에서 심사를 받습니다. 모든 팀원은 7월 1일 기준
        14세 이상 19세 이하여야 합니다.
      </p>
    </>
  ),
};

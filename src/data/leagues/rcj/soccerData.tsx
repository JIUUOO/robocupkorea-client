import soccerImage from "@/assets/images/leagues/rcj/soccer.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const soccerData = {
  parent: "RoboCupJunior",
  title: "Soccer",
  preview: (
    <>
      <ImageReferenced src={soccerImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-xl font-medium">Soccer League (2:2 Lightweight and Open)</p>
        <p className="r-text-base">
          Soccer League는 매년 열리는 국제 로보컵 대회에서 두 개의 서브 리그가 있습니다. 축구 경량화(Light Weight)와
          축구 오픈(Open)입니다.
        </p>
        <p className="r-text-base">
          두 리그 모두 팀당 두 대의 로봇으로 진행되지만, 경량화 로봇은 카메라 없이 감지할 수 있는 적외선 볼을 사용하면서
          무게 제한이 존재합니다.
        </p>
        <p className="r-text-base">
          오렌지 골프공을 카메라로 감지해야하기 때문에 오픈 리그보다 더 정교한 소프트웨어를 요구합니다.
        </p>
        <p className="r-text-xl font-medium">Soccer Entry</p>
        <p className="r-text-base">
          Soccer Entry(1:1 리그) 팀당 하나의 로봇으로 경쟁하는 하위 리그 입니다. 축구 엔트리는 Soccer 1:1 Standard Kit
          League와 Soccer 1:1 Lightweight로 구성됩니다.
        </p>
        <p className="r-text-base">
          Soccer 1:1 Standard Kit League는 제한된 구성으로 처음 로봇컵에 참가하는 참가자들끼리 경쟁합니다.
        </p>
        <p className="r-text-base">
          Soccer 1:1 Lightweight는 경량화된 로봇으로 경쟁합니다. 2:2 Lightweight, 2:2 Open 리그에 도전하기 전 참가하는
          리그입니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-xl font-medium">Soccer League (2:2 Lightweight and Open)</p>
        <p className="r-text-base">
          The Soccer League consists of two sub-leagues in the annual international RoboCup competition: Lightweight and
          Open.
        </p>
        <p className="r-text-base">
          Both leagues involve two robots per team, but Lightweight robots use an infrared ball, which can be detected
          without a camera, and have a weight limit.
        </p>
        <p className="r-text-base">
          The Open League requires more sophisticated software, as robots must detect an orange golf ball using a
          camera.
        </p>
        <p className="r-text-xl font-medium">Soccer Entry</p>
        <p className="r-text-base">
          Soccer Entry (1:1 League) is a lower-tier league where each team competes with a single robot. It consists of
          the Soccer 1:1 Standard Kit League and the Soccer 1:1 Lightweight League.
        </p>
        <p className="r-text-base">
          The Soccer 1:1 Standard Kit League is designed for beginners, competing with a standardized kit setup.
        </p>
        <p className="r-text-base">
          The Soccer 1:1 Lightweight League features lightweight robots and serves as a stepping stone for teams aiming
          to compete in the 2:2 Lightweight or 2:2 Open leagues.
        </p>
      </>
    ),
  },
};

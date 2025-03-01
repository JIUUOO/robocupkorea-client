import Image from "@/components/common/image/Image";
import rescueMazebasicImage from "@/assets/images/leagues/rcjk/rescue-mazebasic.webp";

export const rescueMazebasicData = {
  parent: "RoboCupJuniorKorea",
  title: "Rescue MazeBasic",
  preview: (
    <>
      <Image src={rescueMazebasicImage} />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base"></p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base"></p>
      </>
    ),
  },
};

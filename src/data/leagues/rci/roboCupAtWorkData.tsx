import roboCupAtWorkImage from "@/assets/images/leagues/rci/roboCupAtWork.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const roboCupAtWorkData = {
  parent: "RoboCupIndustrial",
  title: "RoboCup@Work",
  preview: (
    <>
      <ImageReferenced src={roboCupAtWorkImage} origin="" />
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

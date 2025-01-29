import logisticsImage from "@/assets/images/leagues/rci/logistics.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const logisticsData = {
  parent: "RoboCupIndustrial",
  title: "Logistics",
  preview: (
    <>
      <ImageReferenced src={logisticsImage} origin="" />
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

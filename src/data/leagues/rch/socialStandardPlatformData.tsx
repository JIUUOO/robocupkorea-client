import socialStandardPlatformImage from "@/assets/images/leagues/rch/socialStandardPlatform.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const socialStandardPlatformData = {
  parent: "RoboCup@Home",
  title: "Social Standard Platform",
  preview: (
    <>
      <ImageReferenced src={socialStandardPlatformImage} origin="" />
    </>
  ),
  content: {
    "ko-KR": (
      <>
        <p className="r-text-base">
          Social Standard Platform League는 Softbank Robotics Pepper 표준 플랫폼을 사용합니다.
        </p>
      </>
    ),
    "en-US": (
      <>
        <p className="r-text-base">
          The Social Standard Platform League uses the SoftBank Robotics Pepper as its standard platform.
        </p>
      </>
    ),
  },
};

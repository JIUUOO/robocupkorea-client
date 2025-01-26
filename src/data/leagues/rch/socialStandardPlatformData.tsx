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
  content: (
    <>
      <p className="r-text-base">
        Social Standard Platform League는 Softbank Robotics Pepper 표준 플랫폼을 사용합니다.
      </p>
    </>
  ),
};

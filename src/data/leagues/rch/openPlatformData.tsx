import openPlatformImage from "@/assets/images/leagues/rch/openPlatform.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const openPlatformData = {
  parent: "RoboCup@Home",
  title: "Open Platform",
  preview: (
    <>
      <ImageReferenced src={openPlatformImage} origin="" />
    </>
  ),
  content: (
    <>
      <p className="r-text-base">Open Platform League에서는 모든 커스텀 플랫폼이 허용됩니다.</p>
    </>
  ),
};

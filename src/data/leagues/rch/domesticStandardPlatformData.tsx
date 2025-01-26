import domesticStandardPlatformImage from "@/assets/images/leagues/rch/domesticStandardPlatform.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const domesticStandardPlatformData = {
  parent: "RoboCup@Home",
  title: "Domestic Standard Platform",
  preview: (
    <>
      <ImageReferenced src={domesticStandardPlatformImage} origin="" />
    </>
  ),
  content: (
    <>
      <p className="r-text-base">
        Domestic Standard Platform League는 토요타사의 인간 지원 로봇(Human Support Robot) 표준 플랫폼을 사용합니다.
      </p>
    </>
  ),
};

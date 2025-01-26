import standardPlatformImage from "@/assets/images/leagues/rcs/standardPlatform.webp";
import ImageReferenced from "@/components/common/image/ImageReferenced";

export const standardPlatformData = {
  parent: "RoboCupSoccer",
  title: "Standard Platform",
  preview: (
    <>
      <ImageReferenced src={standardPlatformImage} origin="" />
    </>
  ),
  content: (
    <p className="r-text-base">
      Domestic Standard Platform League는 토요타사의 인간 지원 로봇(Human Support Robot) 표준 플랫폼을 사용합니다.
    </p>
  ),
};

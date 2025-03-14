import clsx from "clsx";

import { committeeData } from "@/data/about/committeeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/hooks/useLanguage";

export default function Committee() {
  const { language } = useLanguage();

  const getPositionIcon = (position: string) => {
    switch (position) {
      case "Chair":
      case "Co-chair":
        return faUserTie;
      default:
        return faUser;
    }
  };

  if (language === "ko-KR")
    return (
      <>
        <div className="r-text-base">
          양질의 다양한 AI·로봇 교육 제공에 뜻을 같이 하는 교육 관련 종사자와 자원봉사자들로 구성된 비영리 기관입니다.
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-y-5 lg:grid-cols-5 lg:gap-y-5 xl:grid-cols-6 xl:gap-y-6">
          {committeeData[language].map((member) => (
            <div key={member.name} className="flex justify-center">
              <div className="flex w-36 flex-col justify-between gap-2 border border-gray bg-neutral px-2 py-3 lg:w-40">
                <div className="flex flex-col items-center gap-1.5">
                  <FontAwesomeIcon icon={getPositionIcon(member.position)} className="r-text-5xl" />
                  <div className="r-text-base">
                    <span className="font-semibold">{member.name}</span>&nbsp;
                    <span className={clsx({ "text-sm lg:text-base": member.position === "공동 위원장" })}>
                      {member.position}
                    </span>
                  </div>
                  <div className="text-center text-sm lg:text-base">
                    {Array.isArray(member.affiliation) ? (
                      <>
                        <div>{member.affiliation[0]}</div>
                        <div>{member.affiliation[1]}</div>
                      </>
                    ) : (
                      <>
                        <div>{member.affiliation}</div>
                        <div className="text-gray">•</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div
                    className="flex cursor-pointer items-center justify-center rounded bg-gray px-1 py-0.5"
                    onClick={() => alert(member.contact)}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="r-text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );

  if (language === "en-US")
    return (
      <>
        <div className="r-text-base">
          It is a non-profit organization composed of educators and volunteers who share the mission of
          providinghigh-quality and diverse AI and robotics education.
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-y-5 lg:grid-cols-5 lg:gap-y-5 xl:grid-cols-6 xl:gap-y-6">
          {committeeData[language].map((member) => (
            <div key={member.name} className="flex justify-center">
              <div className="flex w-36 flex-col justify-between gap-2 border border-gray bg-neutral px-2 py-3 lg:w-40">
                <div className="flex flex-col items-center gap-1.5">
                  <FontAwesomeIcon icon={getPositionIcon(member.position)} className="r-text-5xl" />
                  <div className="r-text-base text-center">
                    <div className="font-semibold">{member.name}</div>
                    <div className={clsx("text-sm lg:text-base")}>{member.position}</div>
                  </div>
                  <div className="text-center text-sm lg:text-base">
                    {Array.isArray(member.affiliation) ? (
                      <>
                        <div>{member.affiliation[0]}</div>
                        <div>{member.affiliation[1]}</div>
                      </>
                    ) : (
                      <>
                        <div>{member.affiliation}</div>
                        <div className="text-gray">•</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div
                    className="flex cursor-pointer items-center justify-center rounded bg-gray px-1 py-0.5"
                    onClick={() => alert(member.contact)}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="r-text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

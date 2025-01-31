import { useLanguage } from "@/hooks/useLanguage";

export default function Intro() {
  const { language } = useLanguage();

  if (language === "ko-KR")
    return (
      <>
        <div className="r-text-base">
          사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인
          로보컵(RoboCup) 리그를 주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다.
        </div>
        <div className="r-text-base">
          RCKA는 도전, 협동, 경쟁 등 다양한 교육적 가치를 제공하는 비영리 단체로, 어린 학생들에게 로봇 분야에서 전자,
          하드웨어, 소프트웨어 기술을 학습할 수 있는 기회를 제공합니다. 이를 통해 학생들은 기술적 역량을 키울 뿐만
          아니라 창의적인 문제 해결 능력과 협동심을 배울 수 있습니다. 또한, RCKA는 학생들이 친구들과 기술을 공유하며
          팀워크를 경험하고, 새로운 동기 부여와 경험을 얻을 수 있는 기회를 제공합니다.
        </div>
        <div className="r-text-base">
          RCKA의 여정은 2013년 3월 10일, 제1회 한국로보컵주니어의 개최로 시작되었습니다. 이 이벤트는 로봇에 관심 있는
          청소년들에게 전자, 하드웨어, 소프트웨어 활용 능력을 향상시킬 수 있는 기회를 제공하고자 시작되었으며, 그 노력은
          10년이 넘는 시간 동안 지속되었습니다.
        </div>
        <iframe
          className="aspect-video w-full rounded"
          src="https://www.youtube.com/embed/xeAO09prmV8?si=mb_LYKthwrrIIGcL&amp;controls=1&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="r-text-base">
          RCKA는 다양한 참가자들이 우수한 로봇 개발이라는 공동의 목표를 위해 팀을 이루어 함께 연구하고 성장할 수 있는
          기회를 제공합니다. 이 과정에서 참가자들은 기술뿐만 아니라 협력과 소통의 가치를 배우며, 미래의 로봇 기술을
          이끌어갈 역량을 기르게 됩니다.
        </div>
      </>
    );

  if (language === "en-US")
    return (
      <>
        <div className="r-text-base">
          RoboCup Korea Association (RCKA) is a non-profit organization that hosts national and international RoboCup
          League events, fostering project-based robotics education for students.
        </div>
        <div className="r-text-base">
          RCKA is a non-profit organization that provides various educational values such as challenge, cooperation, and
          competition. It offers young students the opportunity to learn electronic, hardware, and software technologies
          in the field of robotics. Through this, students not only develop their technical skills but also cultivate
          creative problem-solving abilities and a spirit of collaboration. Additionally, RCKA provides opportunities
          for students to share their knowledge with friends, experience teamwork, and gain new motivation and valuable
          experiences.
        </div>
        <div className="r-text-base">
          RCKA's journey began on March 10, 2013, with the launch of the first Korea RoboCup Junior. This event was
          initiated to provide young students interested in robotics with opportunities to enhance their skills in
          electronics, hardware, and software. That effort has continued for over a decade, fostering growth and
          innovation in the field.
        </div>
        <iframe
          className="aspect-video w-full rounded"
          src="https://www.youtube.com/embed/xeAO09prmV8?si=mb_LYKthwrrIIGcL&amp;controls=1&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="r-text-base">
          RCKA provides participants with the opportunity to form teams and collaborate toward the shared goal of
          developing outstanding robots. Through this process, participants not only enhance their technical skills but
          also learn the values of cooperation and communication, equipping them with the capabilities to lead the
          future of robotics.
        </div>
      </>
    );
}

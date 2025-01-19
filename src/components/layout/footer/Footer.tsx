import { Link } from "react-router-dom";

import LogoRcka from "@/assets/images/logos/rcka.png";
import LogoInstitution1 from "@/assets/images/logos/institution1.jpg";
import LogoInstitution2 from "@/assets/images/logos/institution2.jpg";
import LogoInstitution3 from "@/assets/images/logos/institution3.jpg";

export default function Footer() {
  // const nav = [
  //   { to: "/about", title: "about" },
  //   { to: "/leagues", title: "leagues" },
  //   { to: "/events", title: "events" },
  //   { to: "/news", title: "news" },
  //   { to: "/notices", title: "notices" },
  // ];

  const institution = [
    { src: LogoInstitution1, href: "https://www.motie.go.kr/" },
    { src: LogoInstitution2, href: "https://www.nts.go.kr/" },
    { src: LogoInstitution3, href: "https://www.acrc.go.kr/" },
  ];

  return (
    <footer className="relative w-full bg-neutral">
      <div className="rounded border-t border-gray bg-white px-4 pb-10 pt-8">
        <div className="container flex flex-col max-lg:gap-12 lg:gap-16">
          <div>
            <Link to="/" className="inline-block">
              <img src={LogoRcka} className="h-14 xl:h-20" alt="LogoRcka" />
            </Link>
            <div className="r-text-base mt-2 max-w-96 break-keep lg:max-w-108">
              사단법인 한국로보컵협회는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵 리그를
              주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다.
            </div>
          </div>

          {/* <div className="flex flex-col">
            <div className="r-text-sm pb-1 font-medium uppercase">sitemap</div>
            {nav.map(({ to, title }) => (
              <div key={to}>
                <Link to={to} className="r-text-sm inline uppercase hover:underline">
                  {title}
                </Link>
              </div>
            ))}
          </div> */}

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              {institution.map(({ src, href }) => (
                <div className="inline-flex" key={src}>
                  <a href={href} className="inline" target="_blank">
                    <img src={src} className="h-10 lg:h-12" alt="logoInstitution" />
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <div className="r-text-sm">
                  <span className="font-semibold">한국로보컵협회</span> | Tel : 070-4247-7485
                </div>
                <div className="r-text-sm"> 주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308</div>
              </div>
              <hr />
              <div>
                <div className="r-text-sm">Copyright ©한국로보컵협회. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

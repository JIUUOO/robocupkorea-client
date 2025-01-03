import { Link } from "react-router-dom";

import LogoRcka from "@/assets/images/logos/rcka.png";

export default function Footer() {
  const nav = [
    { to: "/about", title: "about" },
    { to: "/leagues", title: "leagues" },
    { to: "/events", title: "events" },
    { to: "/news", title: "news" },
    { to: "/notice", title: "notice" },
  ];

  return (
    <footer className="relative bg-neutral pt-10">
      <div className="rounded-[3px] border-t border-white bg-gray px-4 pb-10 pt-8">
        <div className="container flex flex-col gap-8">
          <div>
            <Link to="/" className="inline-block">
              <img src={LogoRcka} className="h-16" alt="LogoRcka" />
            </Link>
            <div className="mt-2 w-96 break-keep">
              사단법인 한국로보컵협회는 로봇을 연구하는 학생들을 위해 국가적 및 국제적 로봇 이벤트인 로보컵 리그를
              주최하며, 프로젝트 중심의 교육을 증진하는 비영리 단체입니다.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pb-1 uppercase">sitemap</div>
            {nav.map(({ to, title }) => (
              <div key={to}>
                <Link to={to} className="text-sm uppercase hover:underline">
                  {title}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="text-sm">
                <span className="font-semibold">한국로보컵협회</span> | Tel : 070-4247-7485
              </div>
              <div className="text-sm"> 주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308</div>
            </div>
            <hr />
            <div>
              <div className="text-sm">Copyright ©한국로보컵협회. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

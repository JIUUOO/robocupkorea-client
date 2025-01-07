import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Landing from "@/components/home/landing/Landing";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex h-full w-full min-w-[375px] flex-col bg-neutral font-pretendard">
      <Header />
      <ScrollToTop />
      {isHome && <Landing />}
      <main
        className={clsx("h-full w-full bg-neutral", {
          "relative mt-[100vh]": isHome,
          "max-md:pt-16 md:pt-24": !isHome,
        })}
      >
        <div className="flex flex-col gap-10 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

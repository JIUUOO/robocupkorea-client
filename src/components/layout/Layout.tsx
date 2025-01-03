import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="h-full w-full bg-neutral font-pretendard">
      <Header />
      <main className={`flex flex-col gap-6 ${pathname === "/" ? "" : "pt-24"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

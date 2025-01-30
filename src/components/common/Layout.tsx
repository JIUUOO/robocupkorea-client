import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Landing from "@/components/home/landing/Landing";
import ScrollToTop from "@/components/common/ScrollToTop";
import LanguageHelmet from "@/components/common/seo/SEOHelmet";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <LanguageHelmet />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        className="flex w-full min-w-[376px] flex-col font-pretendard"
      >
        <Header />
        <ScrollToTop />
        {isHome && <Landing />}
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          className={clsx("h-full min-h-[100lvh] w-full bg-neutral", {
            "z-10 mt-[100lvh]": isHome,
            "max-md:pt-16 md:pt-24": !isHome,
          })}
        >
          <div className="flex flex-col gap-8 py-8">
            <Outlet />
          </div>
        </motion.main>
        <Footer />
      </motion.div>
    </>
  );
}

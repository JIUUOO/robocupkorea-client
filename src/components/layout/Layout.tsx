import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion"; // "motion/react" 대신 "framer-motion" 사용

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Landing from "@/components/home/landing/Landing";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="flex h-full w-full min-w-[376px] flex-col bg-neutral font-pretendard"
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
        className={clsx("h-full w-full bg-neutral", {
          "relative mt-[100lvh]": isHome,
          "max-md:pt-16 md:pt-24": !isHome,
        })}
      >
        <div className="flex flex-col gap-8 py-8">
          <Outlet />
        </div>
      </motion.main>
      <Footer />
    </motion.div>
  );
}

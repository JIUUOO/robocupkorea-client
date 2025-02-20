import { useLayoutEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  // faEllipsis,
  faGlobe,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import logoRcka from "@/assets/images/logos/rcka.png";
import logoRobocup from "@/assets/images/logos/robocup.png";
// import logoRobocupJunior from "@/assets/images/logos/robocup-junior.png";
// import logoRcap from "@/assets/images/logos/rcap.png";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useLanguage } from "@/hooks/useLanguage";
import { Lang } from "@/types/Lang";

export default function Header() {
  const [isMainMenuEntered, setIsMainMenuEntered] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  // const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const windowWidth = useWindowWidth();
  const location = useLocation();

  const aboutMenu = [
    { name: "Introduction", id: "introduction" },
    { name: "Committee", id: "committee" },
    { name: "History", id: "history" },
    { name: "News", id: "news" },
    { name: "Sponsor", id: "sponsor" },
  ];

  const handleLanguageChange = (langTo: Lang) => {
    if (language !== langTo) {
      setLanguage(langTo);
      const params = new URLSearchParams(window.location.search);
      params.set("lang", langTo);
      window.location.href = `/?${params.toString()}`;
    }
  };

  useLayoutEffect(() => {
    if (isMainMenuOpen) {
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMainMenuOpen]);

  useLayoutEffect(() => {
    if (isMainMenuOpen) setIsMainMenuOpen(false);

    if (isAboutMenuOpen) setIsAboutMenuOpen(false);

    // if (isMoreOpen) setIsMoreOpen(false);

    if (isLangOpen) setIsLangOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed top-0 z-50 flex w-full min-w-[376px] items-center border-b border-gray bg-white max-md:h-16 md:h-24">
      <div className="container flex w-full max-md:justify-between">
        <div className="flex items-center">
          <NavLink to={`/${location.search}`}>
            <img
              src={logoRcka}
              className="aspect-[5/3] cursor-pointer object-contain max-md:h-14 md:mr-14 md:h-20"
              alt="RCKA"
            />
          </NavLink>
        </div>
        <nav className="flex justify-between md:w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: windowWidth >= 768 || isMainMenuOpen ? 1 : 0,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className={clsx("flex md:items-center", {
              "max-md:absolute max-md:left-1/2 max-md:top-16 max-md:z-50 max-md:!block max-md:h-screen max-md:w-full max-md:translate-x-[-50%] max-md:bg-white":
                isMainMenuOpen,
              "max-md:hidden": !isMainMenuOpen,
            })}
          >
            <ul
              className={clsx("max-md:mt-3 md:flex md:gap-6 md:text-center", {
                "max-md:container max-md:space-y-3": isMainMenuOpen,
              })}
            >
              <li
                onMouseEnter={() => {
                  if (windowWidth >= 768) {
                    setIsMainMenuEntered(true);
                    setIsAboutMenuOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (windowWidth >= 768) {
                    setIsMainMenuEntered(false);
                    setIsAboutMenuOpen(false);
                  }
                }}
              >
                <NavLink
                  onClick={() => setIsMainMenuEntered(false)}
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:pl-7 md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                  to={`/about${location.search}`}
                >
                  about
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={(event) => {
                      if (windowWidth < 768) {
                        event.preventDefault();
                        event.stopPropagation();
                        setIsAboutMenuOpen((prev) => !prev);
                      }
                    }}
                    className="relative z-20 px-2 max-md:text-2xl md:text-xl"
                  />
                </NavLink>

                {/* Submenu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isAboutMenuOpen ? 1 : 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeOut",
                    },
                  }}
                  className={clsx("", {
                    "md:absolute md:pt-4": isMainMenuEntered,
                    "md:hidden": !isMainMenuEntered,
                    "max-md:block": isAboutMenuOpen,
                    "max-md:hidden": !isAboutMenuOpen,
                  })}
                >
                  <div className="flex flex-col gap-1.5 rounded-xl border border-gray bg-white px-4 py-3 max-md:mt-1.5">
                    {aboutMenu.map((menu) => (
                      <div key={menu.id} className="text-left">
                        <NavLink
                          to={`/about${location.search}#${menu.id}`}
                          onClick={() => setIsMainMenuEntered(false)}
                          className="cursor-pointer text-xl font-medium md:hover:text-accent"
                        >
                          {menu.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </li>
              <li>
                <NavLink
                  to={`/leagues${location.search}`}
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                >
                  leagues
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/events${location.search}`}
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/notices${location.search}`}
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                >
                  notices
                </NavLink>
              </li>
            </ul>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* <div
              onMouseEnter={() => windowWidth >= 768 && setIsMoreOpen(true)}
              onMouseLeave={() => windowWidth >= 768 && setIsMoreOpen(false)}
            >
              <FontAwesomeIcon
                icon={faEllipsis}
                className={clsx(
                  "flex w-7 cursor-pointer justify-center max-md:text-3xl md:text-3xl md:md:hover:text-accent",
                  { "text-accent": isMoreOpen },
                )}
                onClick={() => {
                  if (windowWidth < 768) {
                    setIsMainMenuOpen(false);
                    setIsLangOpen(false);
                    setIsMoreOpen((prev) => !prev);
                  }
                }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isMoreOpen ? 1 : 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                className={clsx("absolute max-md:ml-[-212px] max-md:pt-3 md:ml-[-242px] md:pt-4", {
                  hidden: !isMoreOpen,
                })}
              >
                <div
                  className={clsx("flex items-center gap-3 rounded-xl border border-gray bg-white p-3 shadow md:p-3.5")}
                >
                  <a href="https://www.robocup.org/" target="_blank">
                    <img src={logoRobocup} alt="robocup" className="h-12 md:h-14" />
                  </a>
                  <a href="https://junior.robocup.org/" target="_blank">
                    <img src={logoRobocupJunior} alt="robocup-junior" className="h-12 md:h-14" />
                  </a>
                  <a href="https://robocupap.org/" target="_blank">
                    <img src={logoRcap} alt="rcap" className="h-12 md:h-14" />
                  </a>
                </div>
              </motion.div>
            </div> */}

            <a href="https://www.robocup.org/" target="_blank">
              <img
                src={logoRobocup}
                className="cursor-pointer rounded-full bg-neutral object-contain px-1 py-1 max-lg:h-12 lg:h-14"
                alt="ROBOCUP_FEDERATION"
              />
            </a>

            <div
              onMouseEnter={() => windowWidth >= 768 && setIsLangOpen(true)}
              onMouseLeave={() => windowWidth >= 768 && setIsLangOpen(false)}
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className={clsx(
                  "flex w-7 cursor-pointer justify-center max-md:text-3xl md:text-3xl md:md:hover:text-accent",
                  { "text-accent": isLangOpen },
                )}
                onClick={() => {
                  if (windowWidth < 768) {
                    setIsMainMenuOpen(false);
                    // setIsMoreOpen(false);
                    setIsLangOpen((prev) => !prev);
                  }
                }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isLangOpen ? 1 : 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                className={clsx("absolute max-md:ml-[-16px] max-md:pt-3 md:ml-[-20px] md:pt-4", {
                  hidden: !isLangOpen,
                })}
              >
                <div
                  className={clsx(
                    "flex flex-col items-center gap-3 rounded-xl border border-gray bg-white p-3 font-semibold uppercase shadow md:p-3.5",
                  )}
                >
                  <div
                    className={clsx({
                      "cursor-default text-primary": language === "ko-KR",
                      "cursor-pointer": language !== "ko-KR",
                    })}
                    onClick={() => handleLanguageChange("ko-KR")}
                  >
                    kor
                  </div>
                  <div
                    className={clsx({
                      "cursor-default text-primary": language === "en-US",
                      "cursor-pointer": language !== "en-US",
                    })}
                    onClick={() => handleLanguageChange("en-US")}
                  >
                    eng
                  </div>
                </div>
              </motion.div>
            </div>

            <FontAwesomeIcon
              icon={isMainMenuOpen ? faTimes : faBars}
              className="flex w-7 cursor-pointer justify-center text-3xl md:hidden md:md:hover:text-accent"
              onClick={() => {
                // setIsMoreOpen(false);
                setIsLangOpen(false);
                setIsMainMenuOpen((prev) => !prev);
              }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

import { useLayoutEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faGlobe, faTimes } from "@fortawesome/free-solid-svg-icons";

import logoRcka from "@/assets/images/logos/rcka.png";

export default function Header() {
  const [isEntered, setIsEntered] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const aboutMenu = [
    { name: "Introduction", id: "introduction" },
    { name: "Committee", id: "committee" },
    { name: "History", id: "history" },
    { name: "News", id: "news" },
    { name: "Sponser", id: "sponser" },
  ];

  useLayoutEffect(() => {
    if (isOpened) {
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  useLayoutEffect(() => {
    if (isOpened) {
      setIsOpened(false);
    }

    if (isSubmenuOpen) {
      setIsSubmenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className="fixed top-0 z-50 flex w-full min-w-[376px] items-center border-b border-gray bg-white max-md:h-16 md:h-24">
      <div className="container flex w-full max-md:justify-between">
        <div className="flex items-center">
          <img
            src={logoRcka}
            className="aspect-[5/3] cursor-pointer object-contain max-md:h-14 md:mr-20 md:h-20"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="flex justify-between md:w-full">
          <div
            className={clsx("flex md:items-center", {
              "max-md:absolute max-md:left-1/2 max-md:top-16 max-md:z-50 max-md:!block max-md:h-screen max-md:w-full max-md:translate-x-[-50%] max-md:bg-white":
                isOpened,
              "max-md:hidden": !isOpened,
            })}
          >
            <ul
              className={clsx("max-md:mt-3 md:flex md:gap-6 md:text-center", {
                "max-md:container max-md:space-y-3": isOpened,
              })}
            >
              <li onMouseEnter={() => setIsEntered(true)} onMouseLeave={() => setIsEntered(false)}>
                <NavLink
                  onClick={() => setIsEntered(false)}
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:pl-5 md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                  to="/about"
                >
                  about
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setIsSubmenuOpen((prev) => !prev);
                    }}
                    className="relative z-20 px-2 max-md:text-2xl md:text-xl"
                  />
                </NavLink>

                {/* Submenu */}
                <div
                  className={clsx("", {
                    "md:absolute md:pt-4": isEntered,
                    "md:hidden": !isEntered,
                    "max-md:block": isSubmenuOpen,
                    "max-md:hidden": !isSubmenuOpen,
                  })}
                >
                  <div className="flex flex-col gap-1.5 rounded-lg border border-gray bg-white px-4 py-3">
                    {aboutMenu.map((menu) => (
                      <div key={menu.id} className="text-left">
                        <NavLink
                          to={`/about/#${menu.id}`}
                          onClick={() => setIsEntered(false)}
                          className="r-text-xl cursor-pointer font-medium hover:text-accent"
                        >
                          {menu.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                  to="/leagues"
                >
                  leagues
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                  to="/events"
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx("font-semibold uppercase max-md:text-2xl md:text-xl md:hover:text-accent", {
                      "text-primary": isActive,
                      "text-black": !isActive,
                    })
                  }
                  to="/notices"
                >
                  notices
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faGlobe} className="max-md:text-3xl md:text-3xl md:md:hover:text-accent" />
            <FontAwesomeIcon
              icon={isOpened ? faTimes : faBars}
              className="w-7 text-3xl md:hidden md:md:hover:text-accent"
              onClick={() => setIsOpened((prev) => !prev)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

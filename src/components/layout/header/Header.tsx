import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faTimes } from "@fortawesome/free-solid-svg-icons";

import LogoRcka from "@/assets/images/logos/rcka.png";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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

  useEffect(() => {
    if (isOpened) {
      setIsOpened(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <header className="fixed top-0 z-50 flex w-full min-w-[375px] items-center border-b border-gray bg-white max-md:h-16 md:h-24">
      <div className="container flex w-full max-md:justify-between">
        <div className="flex items-center">
          <img
            src={LogoRcka}
            className="cursor-pointer max-md:h-14 md:mr-20 md:h-20"
            alt="LogoRcka"
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="flex justify-between md:w-full">
          <div
            className={`flex md:items-center ${isOpened ? "max-md:absolute max-md:left-1/2 max-md:top-16 max-md:z-50 max-md:!block max-md:h-screen max-md:w-full max-md:translate-x-[-50%] max-md:bg-white" : "max-md:hidden"}`}
          >
            <ul
              className={`py-8 md:flex md:gap-6 md:text-center ${isOpened ? "max-md:container max-md:space-y-2" : ""}`}
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-medium font-semibold uppercase hover:text-accent max-md:text-2xl md:text-xl ${isActive ? "text-primary" : "text-black"}`
                  }
                  to="/about"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-medium font-semibold uppercase hover:text-accent max-md:text-2xl md:text-xl ${isActive ? "text-primary" : "text-black"}`
                  }
                  to="/leagues"
                >
                  leagues
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-medium font-semibold uppercase hover:text-accent max-md:text-2xl md:text-xl ${isActive ? "text-primary" : "text-black"}`
                  }
                  to="/events"
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-medium font-semibold uppercase hover:text-accent max-md:text-2xl md:text-xl ${isActive ? "text-primary" : "text-black"}`
                  }
                  to="/news"
                >
                  news
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-medium font-semibold uppercase hover:text-accent max-md:text-2xl md:text-xl ${isActive ? "text-primary" : "text-black"}`
                  }
                  to="/notice"
                >
                  notice
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faGlobe} className="max-md:text-3xl md:text-3xl md:hover:text-accent" />
            <FontAwesomeIcon
              icon={isOpened ? faTimes : faBars}
              className="w-7 text-3xl md:hidden md:hover:text-accent"
              onClick={() => setIsOpened((prev) => !prev)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

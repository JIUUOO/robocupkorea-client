import { NavLink, useNavigate } from "react-router-dom";

import LogoRcka from "@/assets/images/logos/rcka.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 flex h-24 w-full items-center border-b border-black-transparent">
      <div className="container flex">
        <div className="flex items-center justify-center">
          <img onClick={() => navigate("/")} src={LogoRcka} className="h-20 cursor-pointer pr-14" alt="LogoRcka" />
        </div>
        <div className="flex justify-between">
          <nav className="flex items-center gap-7 text-center">
            <NavLink className="p-1 text-lg font-medium uppercase text-black" to="/about">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>about</span>
              )}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black" to="/leagues">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>leagues</span>
              )}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black" to="/events">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>events</span>
              )}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black" to="/news">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>news</span>
              )}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black" to="/notice">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>notice</span>
              )}
            </NavLink>
          </nav>

          <div>
            {/* language button */}
            {/* event button */}
          </div>
        </div>
      </div>
    </header>
  );
}

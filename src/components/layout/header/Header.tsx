import { NavLink, useNavigate } from "react-router-dom";

import LogoRcka from "@/assets/images/logos/rcka.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full flex items-center h-24 border-b border-black-transparent">
      <div className="container flex">
        <div className="flex justify-center items-center">
          <img onClick={() => navigate("/")} src={LogoRcka} className="cursor-pointer h-20 pr-14" alt="LogoRcka" />
        </div>
        <div className="flex justify-between">
          <nav className="flex items-center gap-7 text-center">
            <NavLink className="text-black text-lg font-medium uppercase p-1" to="/about">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>about</span>
              )}
            </NavLink>
            <NavLink className="text-black text-lg font-medium uppercase p-1" to="/leagues">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>leagues</span>
              )}
            </NavLink>
            <NavLink className="text-black text-lg font-medium uppercase p-1" to="/events">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>events</span>
              )}
            </NavLink>
            <NavLink className="text-black text-lg font-medium uppercase p-1" to="/news">
              {({ isActive }) => (
                <span className={isActive ? "text-primary" : "hover:text-primary-inactive"}>news</span>
              )}
            </NavLink>
            <NavLink className="text-black text-lg font-medium uppercase p-1" to="/notice">
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

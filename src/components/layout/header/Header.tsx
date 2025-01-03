import { NavLink, useNavigate } from "react-router-dom";

import LogoRcka from "@/assets/images/logos/rcka.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 z-50 flex h-24 w-full items-center border-b border-gray bg-white">
      <div className="container flex">
        <div className="flex items-center justify-center">
          <img onClick={() => navigate("/")} src={LogoRcka} className="mr-14 h-20 cursor-pointer" alt="LogoRcka" />
        </div>
        <div className="flex justify-between">
          <nav className="flex items-center gap-7 text-center">
            <NavLink className="p-1 text-lg font-medium uppercase text-black hover:text-accent" to="/about">
              {({ isActive }) => <span className={isActive ? "text-primary" : ""}>about</span>}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black hover:text-accent" to="/leagues">
              {({ isActive }) => <span className={isActive ? "text-primary" : ""}>leagues</span>}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black hover:text-accent" to="/events">
              {({ isActive }) => <span className={isActive ? "text-primary" : ""}>events</span>}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black hover:text-accent" to="/news">
              {({ isActive }) => <span className={isActive ? "text-primary" : ""}>news</span>}
            </NavLink>
            <NavLink className="p-1 text-lg font-medium uppercase text-black hover:text-accent" to="/notice">
              {({ isActive }) => <span className={isActive ? "text-primary" : ""}>notice</span>}
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

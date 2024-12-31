import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout() {
  return (
    <div className="min-w-100 h-full font-pretendard">
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>

      {/* Footer */}
    </div>
  );
}

import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import LanguageRedirect from "@/router/LanguageRedirect";
import Layout from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/home/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Leagues = lazy(() => import("@/pages/leagues/Leagues"));
const LeagueDetail = lazy(() => import("@/pages/leagues/LeagueDetail"));
const Events = lazy(() => import("@/pages/events/Events"));
const EventDetail = lazy(() => import("@/pages/events/EventDetail"));
const Notices = lazy(() => import("@/pages/notices/Notices"));
const NoticeDetail = lazy(() => import("@/pages/notices/NoticeDetail"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <LanguageRedirect>
          <Layout />
        </LanguageRedirect>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "leagues",
          element: <Outlet />,
          children: [
            { path: "", element: <Leagues /> },
            { path: ":id", element: <LeagueDetail /> },
          ],
        },
        {
          path: "events",
          element: <Outlet />,
          children: [
            { path: "", element: <Events /> },
            { path: ":id", element: <EventDetail /> },
          ],
        },
        {
          path: "notices",
          element: <Outlet />,
          children: [
            { path: "", element: <Notices /> },
            { path: ":id", element: <NoticeDetail /> },
          ],
        },
      ],
    },
  ],
  { future: { v7_relativeSplatPath: true } },
);

export default function Router() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

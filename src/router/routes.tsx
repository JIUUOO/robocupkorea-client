import Layout from "@/components/layout/Layout";

import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Leagues = lazy(() => import("@/pages/leagues/Leagues"));
const LeagueDetail = lazy(() => import("@/pages/leagues/LeaguesDetail"));
const Events = lazy(() => import("@/pages/events/Events"));
const EventDetail = lazy(() => import("@/pages/events/EventDetail"));
const Notices = lazy(() => import("@/pages/notices/Notices"));

export interface Route {
  path: string;
  element: React.ReactNode;
  children?: Route[];
}

export const ROUTES: Route[] = [
  {
    path: "/",
    element: <Layout />,
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
        element: <Notices />,
      },
    ],
  },
] as const;

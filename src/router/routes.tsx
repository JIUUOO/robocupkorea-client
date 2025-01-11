import Layout from "@/components/layout/Layout";

import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Leagues = lazy(() => import("@/pages/leagues/Leagues"));
const RcHumanoid = lazy(() => import("@/pages/leagues/RcHumanoid"));
const RcjSoccerLightweight = lazy(() => import("@/pages/leagues/RcjSoccerLightweight"));
const RcjSoccerOpen = lazy(() => import("@/pages/leagues/RcjSoccerOpen"));
const RcjRescueLine = lazy(() => import("@/pages/leagues/RcjRescueLine"));
const RcjOnstage = lazy(() => import("@/pages/leagues/RcjOnstage"));
const RcapCoSpaceAutonomousDrivingU12 = lazy(() => import("@/pages/leagues/RcapCoSpaceAutonomousDrivingU12"));
const RcapCoSpaceAutonomousDrivingU19 = lazy(() => import("@/pages/leagues/RcapCoSpaceAutonomousDrivingU19"));
const RcapCoSpaceRescueU12 = lazy(() => import("@/pages/leagues/RcapCoSpaceRescueU12"));
const RcapCoSpaceRescueU19 = lazy(() => import("@/pages/leagues/RcapCoSpaceRescueU19"));
const BasicRescueBasicU12 = lazy(() => import("@/pages/leagues/BasicRescueBasicU12"));
const BasicRescueBasicU19 = lazy(() => import("@/pages/leagues/BasicRescueBasicU19"));
const BasicRescueMazeBasicU12 = lazy(() => import("@/pages/leagues/BasicRescueMazeBasicU12"));
const BasicRescueMazeBasicU19 = lazy(() => import("@/pages/leagues/BasicRescueMazeBasicU19"));
const Events = lazy(() => import("@/pages/events/Events"));
const EventDetail = lazy(() => import("@/pages/events/EventDetail"));
const Notice = lazy(() => import("@/pages/notice/Notice"));

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
          { path: "rc-humanoid", element: <RcHumanoid /> },
          { path: "rcj-soccer-lightweight", element: <RcjSoccerLightweight /> },
          { path: "rcj-soccer-open", element: <RcjSoccerOpen /> },
          { path: "rcj-rescue-line", element: <RcjRescueLine /> },
          { path: "rcj-onstage", element: <RcjOnstage /> },
          { path: "rcap-cospace-autonomous-driving-u12", element: <RcapCoSpaceAutonomousDrivingU12 /> },
          { path: "rcap-cospace-autonomous-driving-u19", element: <RcapCoSpaceAutonomousDrivingU19 /> },
          { path: "rcap-cospace-rescue-u12", element: <RcapCoSpaceRescueU12 /> },
          { path: "rcap-cospace-rescue-u19", element: <RcapCoSpaceRescueU19 /> },
          { path: "basic-rescue-basic-u12", element: <BasicRescueBasicU12 /> },
          { path: "basic-rescue-basic-u19", element: <BasicRescueBasicU19 /> },
          { path: "basic-rescue-mazebasic-u12", element: <BasicRescueMazeBasicU12 /> },
          { path: "basic-rescue-mazebasic-u19", element: <BasicRescueMazeBasicU19 /> },
        ],
      },
      {
        path: "events",
        element: <Outlet />,
        children: [
          { path: "", element: <Events /> },
          {
            path: ":id",
            element: <EventDetail />,
          },
        ],
      },
      {
        path: "notice",
        element: <Notice />,
      },
    ],
  },
] as const;

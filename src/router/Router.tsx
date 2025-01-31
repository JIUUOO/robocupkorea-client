import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import LanguageRedirect from "@/router/LanguageRedirect";
import Layout from "@/components/common/Layout";
import NotFound from "@/components/notfound/NotFound";

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
        <>
          <LanguageRedirect>
            <Layout />
          </LanguageRedirect>
        </>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<></>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "leagues",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<></>}>
                  <Leagues />
                </Suspense>
              ),
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<></>}>
                  <LeagueDetail />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "events",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<></>}>
                  <Events />
                </Suspense>
              ),
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<></>}>
                  <EventDetail />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "notices",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<></>}>
                  <Notices />
                </Suspense>
              ),
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<></>}>
                  <NoticeDetail />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { future: { v7_relativeSplatPath: true } },
);

export default function Router() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/home/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Leagues = lazy(() => import("@/pages/leagues/Leagues"));
const Events = lazy(() => import("@/pages/events/Events"));
const News = lazy(() => import("@/pages/news/News"));
const Notice = lazy(() => import("@/pages/notice/Notice"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "leagues",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Leagues />
            </Suspense>
          ),
        },
        {
          path: "events",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Events />
            </Suspense>
          ),
        },
        {
          path: "news",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <News />
            </Suspense>
          ),
        },
        {
          path: "notice",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Notice />
            </Suspense>
          ),
        },
      ],
    },
    {},
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

export default function Router() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

import { Suspense } from "react";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";

import { Route, ROUTES } from "@/router/routes";

function mapRoutesToRouter(routes: Route[]): RouteObject[] {
  return routes.map(({ path, element: Component, children }) => ({
    path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    ),
    children: children ? mapRoutesToRouter(children) : undefined,
  }));
}

const router = createBrowserRouter(mapRoutesToRouter(ROUTES), { future: { v7_relativeSplatPath: true } });

export default function Router() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

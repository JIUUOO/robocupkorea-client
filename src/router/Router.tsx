import { Suspense } from "react";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";

import { Route, ROUTES } from "@/router/routes";
import LanguageRedirect from "@/router/LanguageRedirect";

function mapRoutesToRouter(routes: Route[]): RouteObject[] {
  return routes.map(({ path, element, children }) => ({
    path,
    element: (
      <LanguageRedirect>
        <Suspense fallback={<></>}>{element}</Suspense>
      </LanguageRedirect>
    ),
    children: children ? mapRoutesToRouter(children) : undefined,
  }));
}

const router = createBrowserRouter(mapRoutesToRouter(ROUTES), { future: { v7_relativeSplatPath: true } });

export default function Router() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />;
}

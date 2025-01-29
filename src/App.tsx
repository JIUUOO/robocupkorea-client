import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";

import { queryClient } from "@/api/queryClient";
import Router from "@/router/Router";

const helmetContext = {};

export default function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root options={{ overscroll: false }}>
          <Router />
        </ReactLenis>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

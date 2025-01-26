import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis, useLenis } from "lenis/react";

import { queryClient } from "@/api/queryClient";
import Router from "@/router/Router";

export default function App() {
  useLenis(({ scroll }) => {
    if (window.scrollX !== 0) {
      window.scrollTo(0, scroll);
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root options={{ overscroll: false }}>
        <Router />
      </ReactLenis>
    </QueryClientProvider>
  );
}

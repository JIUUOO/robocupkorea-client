import { useEffect, useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { LenisRef, ReactLenis } from "lenis/react";
import { frame, cancelFrame } from "motion/react";

import { queryClient } from "@/api/queryClient";
import Router from "@/router/Router";

const helmetContext = {};

export default function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} className="w-full overflow-x-hidden">
          <Router />
        </ReactLenis>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

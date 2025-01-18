import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/queryClient";
import Router from "@/router/Router";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

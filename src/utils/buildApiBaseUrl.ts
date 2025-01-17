export default function buildApiBaseUrl(route: string | undefined) {
  if (import.meta.env.MODE !== "development") {
    return `${import.meta.env.VITE_API_BASE_URL}${route}`;
  }

  return route;
}

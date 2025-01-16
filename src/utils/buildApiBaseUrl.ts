export default function buildApiBaseUrl(route: string | undefined) {
  return `${import.meta.env.VITE_API_BASE_URL}${route}`;
}

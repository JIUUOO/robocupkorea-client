export default function convertLeagueId(id: string) {
  return id.toLowerCase().replaceAll("_", "-");
}

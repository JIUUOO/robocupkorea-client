export interface EventDetailResponse {
  id: string;
  title: string;
  dates: string[];
  location: string;
  map: string;
  images: string[];
  others: {
    title: string;
    description: string;
  }[];
  leagues: string[];
}

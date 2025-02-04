export interface EventDetailResponse {
  id: string;
  title: string;
  dates: string[];
  location: string;
  map: string;
  register: string;
  others: {
    title: string;
    description: string;
  }[];
  images: string[];
  leagues: string[];
  volunteer: string;
}

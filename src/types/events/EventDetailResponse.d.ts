export interface EventDetailResponse {
  id: string;
  title: string;
  dates: string[];
  location: string;
  map: string;
  register: string;
  others: OtherDetail[];
  images: string[];
  leagues: string[];
  volunteer: string;
}

interface OtherDetail {
  official?: string;
}

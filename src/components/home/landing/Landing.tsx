import { useFetchEventLatest } from "@/hooks/useFetchEventLatest";

import LandingVideo from "@/components/home/landing/LandingVideo";
import LandingInfo from "@/components/home/landing/LandingInfo";

export default function Landing() {
  const { data, isLoading, isError } = useFetchEventLatest();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading</div>;

  return (
    <>
      <LandingVideo />
      <LandingInfo data={data!} />
    </>
  );
}

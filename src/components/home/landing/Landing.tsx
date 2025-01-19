import { useFetchEventLatest } from "@/hooks/events/useFetchEventLatest";

import LandingVideo from "@/components/home/landing/LandingVideo";
import LandingInfo from "@/components/home/landing/LandingInfo";
import LandingInfoDefault from "./LadingInfoDefault";

export default function Landing() {
  const { data, isLoading, isError } = useFetchEventLatest();

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <>
        <LandingVideo />
        <LandingInfoDefault />
      </>
    );

  return (
    <>
      <LandingVideo />
      <LandingInfo data={data!} />
    </>
  );
}

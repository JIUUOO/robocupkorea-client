import { useFetchEventLatest } from "@/hooks/events/useFetchEventLatest";
import { motion } from "motion/react";

import LandingVideo from "@/components/home/landing/LandingVideo";
import LandingInfo from "@/components/home/landing/LandingInfo";
import LandingInfoDefault from "@/components/home/landing/LadingInfoDefault";

export default function Landing() {
  const { data, isLoading, isError } = useFetchEventLatest();

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <LandingVideo />
        <LandingInfoDefault />
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      <LandingVideo />
      <LandingInfo data={data!} />
    </motion.div>
  );
}

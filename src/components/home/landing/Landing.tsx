import { useState } from "react";
import { useFetchEventLatest } from "@/hooks/events/useFetchEventLatest";
import { motion } from "framer-motion";

import LandingVideo from "@/components/home/landing/LandingVideo";
import LandingText from "@/components/home/landing/LandingText";
import LandingInfoDefault from "@/components/home/landing/LadingInfoDefault";

export default function Landing() {
  const { data, isLoading, isError } = useFetchEventLatest();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  if (isLoading) return <></>;

  if (isError)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVideoLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <LandingVideo setIsVideoLoaded={setIsVideoLoaded} />
        <LandingInfoDefault />
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVideoLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <LandingVideo setIsVideoLoaded={setIsVideoLoaded} />
      <LandingText data={data!} />
    </motion.div>
  );
}

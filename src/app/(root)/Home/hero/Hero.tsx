"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BackgroundPattern } from "./components/AnimatedBackground";
import { SearchBar } from "./components/SearchBar";
import Stats from "./components/Stats";
import FloatingIcons from "./components/FloatingIcons";
import FadeUp from "@/shared/animation/FadeUp";
import Heading from "./components/Heading";

const suggestions = [
  "Designer",
  "Programming",
  "Digital Marketing",
  "Video",
  "Animation",
];

const Hero = () => {
  const router = useRouter();
  const [jobSearch, setJobSearch] = useState("");
  const [gigSearch, setGigSearch] = useState("");

  const handleSearch = () => {
    if (jobSearch.trim()) {
      router.push(`/jobs?q=${encodeURIComponent(jobSearch)}`);
    } else if (gigSearch.trim()) {
      router.push(`/gigs?q=${encodeURIComponent(gigSearch)}`);
    }
  };

  return (
    <section className="relative min-h-[80vh] bg-white flex items-center justify-center py-11">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/home/heroBg.svg"
          alt="Hero Background"
          className="w-full h-full object-top object-cover"
        />
      </div>

      {/* White Layer on Top of the Image */}
      <div className="absolute inset-0 bg-white bg-opacity-95 z-10" />

      {/* Animated Images */}
      <motion.img
        src="/home/job.png"
        alt="Job Icon"
        className="absolute size-36 opacity-5 z-30"
        style={{ bottom: "10%", left: "10%" }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror", // Valid string literal
            ease: "easeInOut",
          },
        }}
      />

     <FloatingIcons/>

      <BackgroundPattern />

      {/* Main Content */}
      <div className="container px-4 relative z-30">
        <div className="flex flex-col items-center md:text-center">
          <motion.div
            className="space-y-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            
            <Heading/>

            {/* Search Bars */}
            <div className="space-y-4 w-full">
              <div className="flex flex-col sm:flex-row gap-4">
                <SearchBar
                  type="job"
                  placeholder="Search for jobs..."
                  className="sm:flex-[2]"
                />
                <SearchBar
                  type="gig"
                  placeholder="Search for gigs..."
                  className="sm:flex-[2]"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </motion.div>
              </div>

              {/* Popular Searches */}
              <motion.div
                className="flex flex-wrap justify-center items-center gap-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-gray-500">Popular searches:</span>
                {suggestions.map((suggestion, index) => (
                  <motion.span
                    key={index}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {suggestion}
                    {index !== suggestions.length - 1 && ","}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <Stats />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSearchBar from "./HeroSearchBar";

const SearchSection = () => {
  const router = useRouter();
  const [jobSearch, setJobSearch] = useState("");
  const [gigSearch, setGigSearch] = useState("");

  const handleSearch = () => {
    let searchQuery = "/search?";
    if (jobSearch.trim()) {
      searchQuery += `job=${encodeURIComponent(jobSearch)}`;
    }
    if (gigSearch.trim()) {
      if (searchQuery.length > 7) searchQuery += "&";
      searchQuery += `gig=${encodeURIComponent(gigSearch)}`;
    }

    // Navigate with dynamic query parameters
    router.push(searchQuery);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <HeroSearchBar
          type="job"
          placeholder="Search for jobs..."
          value={jobSearch}
          onChange={setJobSearch}
          className="sm:flex-[2]"
        />
        <HeroSearchBar
          type="gig"
          placeholder="Search for gigs..."
          value={gigSearch}
          onChange={setGigSearch}
          className="sm:flex-[2]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto mt-3 md:mt-0 py-6 text-md rounded-full"
            onClick={handleSearch}
          >
            Search
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchSection;

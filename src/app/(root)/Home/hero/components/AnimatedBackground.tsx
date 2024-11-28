'use client'

import { motion } from "framer-motion";

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden ">
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Pattern Overlay */}
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="pattern"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.2) rotate(45)"
          >
            <motion.path
              d="M12.5 10L25 17.5L37.5 10M25 17.5V35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary/20"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </div>
  );
}

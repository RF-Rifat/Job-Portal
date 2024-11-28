'use client'

import { Search, MapPin, Briefcase } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  type: "job" | "gig"
  placeholder: string
  className?: string
}

export function SearchBar({ type, placeholder, className }: SearchBarProps) {
  return (
    <motion.div 
      className={cn("relative flex-1", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-3 top-1/2  transform -translate-y-1/2 ">
        {type === "job" ? (
          <Briefcase className="w-6 h-5  text-gray-400" />
        ) : (
          <Search className="w-6 h-5  text-gray-400" />
        )}
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        className=" p-5 md:text-xl  pl-10 rounded-full border placeholder:text-gray-400 border-gray-200 bg-white"
      />
    </motion.div>
  )
}


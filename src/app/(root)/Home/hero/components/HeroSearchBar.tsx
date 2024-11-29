import { Search, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import FadeUp from "@/shared/animation/FadeUp";
import { cn } from "@/lib/utils";

// SearchBar Component
const HeroSearchBar = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}: {
  type: "job" | "gig";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) => (
  <FadeUp className={cn("relative flex-1 w-full", className)}>
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
      {type === "job" ? (
        <Briefcase className="w-6 h-5 text-gray-400" />
      ) : (
        <Search className="w-6 h-5 text-gray-400" />
      )}
    </div>
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="p-6 md:text-xl pl-10 sm:!text-lg w-full rounded-full border placeholder:text-gray-400 text-black border-gray-200 bg-white"
    />
  </FadeUp>
);

export default HeroSearchBar;

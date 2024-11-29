"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Building2,
  Briefcase,
  MapPin,
  Globe,
  GraduationCap,
  Shield,
} from "lucide-react";
import Link from "next/link";

interface FilterCategory {
  icon: React.ReactNode;
  label: string;
  subCategories: {
    name: string;
    count: number;
    href: string;
  }[];
}

const filterCategories: Record<string, FilterCategory> = {
  industry: {
    icon: <Building2 className="h-4 w-4" />,
    label: "By Industry",
    subCategories: [
      { name: "Technology", count: 512, href: "#" },
      { name: "Healthcare", count: 423, href: "#" },
      { name: "Finance", count: 398, href: "#" },
      { name: "Education", count: 312, href: "#" },
      { name: "Retail", count: 256, href: "#" },
      { name: "Construction", count: 198, href: "#" },
    ],
  },
  role: {
    icon: <Briefcase className="h-4 w-4" />,
    label: "By Role",
    subCategories: [
      { name: "Software Engineer", count: 789, href: "#" },
      { name: "Project Manager", count: 567, href: "#" },
      { name: "Data Scientist", count: 456, href: "#" },
      { name: "Product Designer", count: 389, href: "#" },
      { name: "Marketing Specialist", count: 345, href: "#" },
      { name: "HR Manager", count: 276, href: "#" },
    ],
  },
  location: {
    icon: <MapPin className="h-4 w-4" />,
    label: "By Location",
    subCategories: [
      { name: "Remote", count: 732, href: "#" },
      { name: "New York", count: 567, href: "#" },
      { name: "San Francisco", count: 456, href: "#" },
      { name: "London", count: 398, href: "#" },
      { name: "Berlin", count: 312, href: "#" },
      { name: "Sydney", count: 276, href: "#" },
    ],
  },
  expertise: {
    icon: <GraduationCap className="h-4 w-4" />,
    label: "By Expertise",
    subCategories: [
      { name: "Entry-Level", count: 623, href: "#" },
      { name: "Mid-Level", count: 512, href: "#" },
      { name: "Senior-Level", count: 389, href: "#" },
      { name: "Management", count: 276, href: "#" },
      { name: "Director", count: 189, href: "#" },
      { name: "Executive", count: 123, href: "#" },
    ],
  },
  jobType: {
    icon: <Globe className="h-4 w-4" />,
    label: "By Job Type",
    subCategories: [
      { name: "Full-Time", count: 832, href: "#" },
      { name: "Part-Time", count: 567, href: "#" },
      { name: "Internship", count: 389, href: "#" },
      { name: "Contract", count: 276, href: "#" },
      { name: "Freelance", count: 198, href: "#" },
      { name: "Temporary", count: 156, href: "#" },
    ],
  },
  companySize: {
    icon: <Shield className="h-4 w-4" />,
    label: "By Company Size",
    subCategories: [
      { name: "1-50 Employees", count: 389, href: "#" },
      { name: "51-200 Employees", count: 456, href: "#" },
      { name: "201-500 Employees", count: 567, href: "#" },
      { name: "501-1000 Employees", count: 276, href: "#" },
      { name: "1001-5000 Employees", count: 198, href: "#" },
      { name: "5000+ Employees", count: 123, href: "#" },
    ],
  },
};

function FilterGroup({ category }: { category: FilterCategory }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {category.subCategories.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium leading-none">
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground">
              ({item.count})
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export function FilterTabs() {
  return (
    <Card className="overflow-hidden border-none bg-background/60 backdrop-blur-sm">
      <Tabs defaultValue="industry" className="w-full">
        <div className="flex items-center border-b px-4 py-2">
          <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1">
            {Object.entries(filterCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <span className="hidden sm:inline-flex sm:items-center sm:gap-2">
                  {category.icon}
                  {category.label}
                </span>
                <span className="sm:hidden">{category.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(filterCategories).map(([key, category]) => (
          <TabsContent key={key} value={key} className="p-4">
            <FilterGroup category={category} />
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}

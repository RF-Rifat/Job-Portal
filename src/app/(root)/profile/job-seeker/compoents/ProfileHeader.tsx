"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProfileHeader = ({ data }: { data: any }) => (
  <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
    <div className="relative h-48 w-48 overflow-hidden rounded-lg">
      <Image
        src={data?.photo} // Static placeholder
        alt="Profile photo"
        className="object-cover"
        fill
        priority
      />
    </div>
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold">{data.jobTitle}</h1>
          <p className="text-muted-foreground">{data.experienceLevel}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold">{data.profileCompletionPercentage}%</span>
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      <div className="flex gap-2">
        <Button>Send message</Button>
        <Button variant="outline">Contacts</Button>
      </div>
    </div>
  </div>
);

export default ProfileHeader;

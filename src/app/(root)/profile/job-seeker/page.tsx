
"use client";

import { Mail, MapPin, Phone, Star, User } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



// Profile Header Component
const ProfileHeader = ({ data }: { data: typeof profileData }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
      <div className="relative h-48 w-48 overflow-hidden rounded-lg">
        <Image
          src={data.photo}
          alt="Profile photo"
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Jeremy Rose</h1>
            <p className="text-muted-foreground">{data.jobTitle}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold">8.6</span>
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
};

// Contact Info Component
function ContactInfo() {
  return (
    <Card>
      <CardHeader className="font-heading text-lg font-semibold">
        Contact Information
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>+1 123 456 7890</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <div className="grid">
            <span>525 E 68th Street</span>
            <span className="text-sm text-muted-foreground">
              New York, NY 10065-78 156-187-80
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>hello@jeremyrose.com</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span>www.jeremyrose.com</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Skills Component
function Skills({ data }: { data: typeof profileData }) {
  return (
    <Card>
      <CardHeader className="font-heading text-lg font-semibold">
        Skills
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Experience Component
function Experience({ data }: { data: typeof profileData }) {
  return (
    <Card>
      <CardHeader className="font-heading text-lg font-semibold">
        Experience
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <h3 className="font-heading font-semibold">Spotify New York</h3>
          <p className="text-sm text-muted-foreground">170 William Street</p>
          <p className="text-sm text-muted-foreground">
            New York, NY 10038-78 212-312-51
          </p>
        </div>
        <Separator />
        <div className="grid gap-2">
          <h3 className="font-heading font-semibold">Metropolitan Museum</h3>
          <p className="text-sm text-muted-foreground">525 E 68th Street</p>
          <p className="text-sm text-muted-foreground">
            New York, NY 10065-78 156-187-80
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Profile Data Component
const profileData = {
  photo: "/placeholder.svg",
  jobTitle: "Product Designer",
  skills: ["Branding", "UI/UX", "Web Design", "Packaging", "Print & Editorial"],
  experienceLevel: "Senior" as const,
  availableHours: 40,
  locationPreference: "Remote" as const,
  additionalDetails: {
    languages: [{ language: "English", proficiency: "Fluent" as const }],
    lastActive: "1 week or less" as const,
    isVerified: true,
  },
  profileCompletionPercentage: 85,
  workExperience: {
    hasExperience: true,
    experiences: [
      {
        companyName: "Spotify New York",
        role: "Product Designer",
        duration: {
          start: new Date("2020-01-01"),
          end: new Date("2023-01-01"),
        },
        description: "Led product design team and implemented major features",
      },
    ],
  },
};

// Main Profile Component
export function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <ProfileHeader data={profileData} />
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="timeline" className="mt-6">
            <div className="grid gap-6">
              <ContactInfo />
              <Skills data={profileData} />
              <Experience data={profileData} />
            </div>
          </TabsContent>
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <p>Additional information about the profile would go here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ProfilePage;

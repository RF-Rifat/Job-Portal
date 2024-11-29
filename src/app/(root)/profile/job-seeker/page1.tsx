"use client";
import ProfileHeader from "./compoents/ProfileHeader";
import ContactInfo from "./compoents/ContactInfo";
import Skills from "./compoents/Skills";
import Experience from "./compoents/Experiences";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const profileData: any = {
  photo: "/profile/profile_1.jpg",
  dateOfBirth: "1990-01-01",
  gender: "Male",
  nationality: "American",
  phone: { countryCode: "+1", number: "1234567890" },
  address: {
    country: "USA",
    stateOrCity: "New York",
    zipCode: "10001",
    fullAddress: "123 Example Street",
  },
  jobTitle: "Senior Developer",
  skills: ["React", "Node.js", "TypeScript", "SQL"],
  experienceLevel: "Senior",
  homeCurrency: "USD",
  timezone: "EST",
  preferredJobTypes: ["Full-Time", "Contract"],
  availableHours: 40,
  hourlyPayInUSD: 70,
  yearsOfExperience: 10,
  locationPreference: "Remote",
  nationalIdNo: "123456789",
  education: {
    educationLevel: "Bachelor's",
    fieldOfStudy: "Computer Science",
    graduationYear: 2012,
  },
  workExperience: {
    hasExperience: true,
    experiences: [
      {
        companyName: "TechCorp",
        role: "Lead Engineer",
        duration: { start: new Date("2015-01-01"), end: new Date("2020-01-01") },
        description: "Managed a team of developers.",
      },
      {
        companyName: "Innovatech",
        role: "Software Engineer",
        duration: { start: new Date("2012-01-01"), end: new Date("2015-01-01") },
      },
    ],
  },
  additionalDetails: {
    languages: [{ language: "English", proficiency: "Fluent" }],
    lastActive: "1 week or less",
    isVerified: true,
    expectedSalary: 120000,
  },
  documentsAndLinks: {
    resume: "/resume.pdf",
    portfolioLinks: ["https://portfolio.example.com"],
    nationalIdImages: {
      front: "/id_front.jpg",
      back: "/id_back.jpg",
      selfieWithIDPhoto: "/selfie_id.jpg",
    },
    certifications: [
      { title: "AWS Certified", dateAchieved: "2021-05-01" },
    ],
    socialMediaLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/example" },
    ],
  },
  profileCompletionPercentage: 90,
};

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
              <ContactInfo data={profileData} />
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

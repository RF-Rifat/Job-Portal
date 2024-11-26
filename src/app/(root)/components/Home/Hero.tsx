import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stats = [
  { number: "1,75,324", label: "Live Job", icon: "briefcase" },
  { number: "97,354", label: "Companies", icon: "building" },
  { number: "38,47,154", label: "Candidates", icon: "users" },
  { number: "7,532", label: "New Jobs", icon: "file" },
];

const suggestions = [
  "Designer",
  "Programming",
  "Digital Marketing",
  "Video",
  "Animation",
];

export default function Hero() {
  return (
    <section className="bg-surface-light dark:bg-surface-dark py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8 max-w-3xl">
            <div>
              <h1 className="text-h1 text-textPrimary-light dark:text-textPrimary-dark mb-4">
                Find a job that suits
                <br />
                your interest & skills.
              </h1>
              <p className="text-bodyLarge text-textSecondary-light dark:text-textSecondary-dark">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary-light dark:text-textSecondary-dark w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Job title, Keyword..."
                    className="pl-10 bg-input-light dark:bg-input-dark"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary-light dark:text-textSecondary-dark w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Your Location"
                    className="pl-10 bg-input-light dark:bg-input-dark"
                  />
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Find Job
                </Button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-2 text-bodySmall">
                <span className="text-textSecondary-light dark:text-textSecondary-dark">
                  Suggestion:
                </span>
                {suggestions.map((suggestion, index) => (
                  <span
                    key={index}
                    className="text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark cursor-pointer"
                  >
                    {suggestion}
                    {index !== suggestions.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background-light dark:bg-background-dark p-4 rounded-lg shadow-light dark:shadow-dark"
                >
                  <div className="text-h3 text-primary dark:text-primary-dark font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

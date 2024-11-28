import { Container } from "@/components/ui/container";
import { FeaturedJobs } from "./FeaturedJobs";

import { BackgroundPatterns } from "@/components/ui/background-patterns";
import { FilterTabs } from "./FilterTabs";
import TopHiringCompanies from "./TopHiringCompanies";
import { CustomerReviews } from "./CustomerReview";
import Newsletter from "./Newsletter";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundPatterns />
      <Container className="relative">
        <div className="space-y-8 py-6 lg:py-8">
          <FilterTabs />
          <FeaturedJobs />
          <TopHiringCompanies />
          <CustomerReviews />
          <Newsletter />
        </div>
      </Container>
    </main>
  );
}

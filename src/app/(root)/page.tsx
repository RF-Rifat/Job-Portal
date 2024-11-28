import { BackgroundPatterns } from "@/components/ui/background-patterns";
import Footer from "./components/Footer";
import Hero from "./Home/hero/Hero";
import Home from "./Home/Index";
import Header from "./navbar/Header";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <BackgroundPatterns />
      <Header />
      <main>
        <Hero />
        <Home />
        {/* <Categories />
        <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default page;

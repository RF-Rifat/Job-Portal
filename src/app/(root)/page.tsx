import Footer from "./components/Footer";
import Header from "./navbar/Header";


import Categories from "./Home/Categories";
import Companies from "./Home/Companies";
import FeaturedCities from "./Home/FeaturedCities";
import FeaturedJobs from "./Home/FeaturedJobs";
import Hero from "./Home/hero/Hero";
import Newsletter from "./Home/Newsletter";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedJobs />
        <Companies />
        <FeaturedCities />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default page;

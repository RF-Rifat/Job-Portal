import Footer from "./components/Footer";
import Header from "./components/navbar/Header";


import Categories from "./components/Home/Categories";
import Companies from "./components/Home/Companies";
import FeaturedCities from "./components/Home/FeaturedCities";
import FeaturedJobs from "./components/Home/FeaturedJobs";
import Hero from "./components/Home/Hero";
import Newsletter from "./components/Home/Newsletter";

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

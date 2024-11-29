
import Footer from "./components/Footer";
import HeroLayout from "./Home/hero/HeroLayout";
import Home from "./Home/Index";
import Header from "./navbar/Header";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main>
        <HeroLayout />
        <Home />
        {/* <Categories />
        <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default page;

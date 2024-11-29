
import Footer from "./components/Footer";
import HeroLayout from "./Home/hero/HeroLayout";
import Home from "./Home/Index";



const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      
      <main>
        <HeroLayout />
        <Home />
        {/* <Categories />
        <Newsletter /> */}
      </main>
    </div>
  );
};

export default page;

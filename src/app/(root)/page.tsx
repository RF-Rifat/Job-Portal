import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Home from "./components/Home/Index";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main>
        <Hero />
        <Home/>
        {/* <Categories />
        <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default page;

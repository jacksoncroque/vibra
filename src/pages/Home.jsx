import ChipButton from "@/components/ChipButton";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products";

const Home = () => {
  return (
    <div className="container-site">
      <header className="bg-[#FBF6E8]">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Products />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Home;

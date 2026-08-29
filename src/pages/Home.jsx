import Depoiments from "@/components/Depoiments";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

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
        <Gallery />
        <Depoiments />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

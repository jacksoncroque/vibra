import ChipButton from "@/components/ChipButton";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products";

const Home = () => {
  return (
    <div className="container-site">
      <header className="bg-[#FBF6E8]">
        <Navbar />
      </header>
      <main >
        <Hero />
        <Products />
      </main>
    </div>
  );
};

export default Home;

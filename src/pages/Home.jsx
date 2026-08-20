import ChipButton from "@/components/ChipButton";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Stars, StarsIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <header className="bg-[#FBF6E8]">
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;

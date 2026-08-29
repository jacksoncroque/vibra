import { ArrowRight, Stars } from "lucide-react";
import { motion } from "motion/react";

import ChipButton from "../ChipButton";
import Button from "../Button";

const Hero = () => {
  return (
    <section
      id="/"
      className="relative min-h-[calc(100vh-5rem)] bg-cover bg-center"
    >
      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-top lg:block"
        style={{ backgroundImage: "url('/images/background.png')" }}
      />

      {/* Mobile and tablet background */}
      <div
        className="absolute inset-0 bg-size-[100%_100%] bg-no-repeat lg:hidden"
        style={{
          backgroundImage: "url('/images/background_mobile.png')",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-3 lg:flex-row lg:gap-16 lg:py-16">
        {/* Text */}
        <motion.div
          className="flex flex-1 flex-col gap-6 py-16 pb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <ChipButton>
            <Stars size={16} color="red" />
            Personalizado para você
          </ChipButton>

          <h1 className="max-w-2xl font-anton text-[60px] leading-[0.95] text-[#3E261B] lg:text-7xl">
            PRESENTES QUE <span className="text-[#E34935]">TRANSFORMAM</span>{" "}
            MOMENTOS EM{" "}
            <span className="font-caveat text-[#E34935]">lembranças</span>
          </h1>

          <p className="max-w-md text-[18px] text-[#796452]">
            A VIBRA cria canecas, copos, ecobags e kits personalizados para
            presentear pessoas, empresas e celebrar datas que merecem ser
            lembradas.
          </p>

          <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
            {/* Budget button */}
            <Button
              className="bg-[#E44734] px-7 py-5 lg:px-5 lg:py-3 flex items-center text-gray-100 transition duration-300 ease-in-out hover:-rotate-3 hover:scale-110"
              href="https://wa.me/555492150680?text=Olá!%20%F0%9F%91%8B%20Vi%20o%20site%20da%20VIBRA%20e%20adorei%20o%20trabalho%20de%20vocês.%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20fazer%20um%20orçamento.%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento
              <ArrowRight />
            </Button>

            {/* Gallery button */}
            <Button
              className="border border-gray-300 bg-white px-7 py-5 font-bold text-gray-600 lg:px-5 lg:py-3 transition duration-300 ease-in-out hover:rotate-3 hover:scale-110"
              href="#gallery"
            >
              Ver produtos
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex shrink-0 justify-center lg:items-center"
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <img
            src="/images/hero-mockup-cKHTg1ET.jpg"
            alt="Produtos da VIBRA"
            className="h-93.5 w-93.5 rounded-[2.5rem] object-cover md:h-150 md:w-150"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

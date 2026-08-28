import { ArrowRight, Stars } from "lucide-react";

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
        <div className="flex flex-1 flex-col gap-6 py-16 pb-0">
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
            <Button className="bg-[#E44734] px-7 py-5 t lg:px-5 lg:py-3">
              <a
                href="https://wa.me/555492150680?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-100"
              >
                Fazer orçamento <ArrowRight />
              </a>
            </Button>

            <Button
              className="border border-gray-300 bg-white px-7 py-5 font-bold text-gray-600 lg:px-5 lg:py-3"
              on
            >
              <a href="#gallery">Ver produtos</a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex shrink-0 justify-center lg:items-center">
          <img
            src="/images/hero-mockup-cKHTg1ET.jpg"
            alt="Produtos da VIBRA"
            className="h-93.5 w-93.5 rounded-[2.5rem] object-cover md:h-150 md:w-150"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

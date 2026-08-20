import { ArrowRight, Stars } from "lucide-react";

import ChipButton from "../ChipButton";
import Button from "../Button";

const Hero = () => {
  return (
    <section id="/"
      className="min-h-[calc(100vh-5rem)] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="mx-30 flex gap-16 py-16">
        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-6 py-16">
          <ChipButton>
            <Stars size={16} color="red" />
            Personalizado para você
          </ChipButton>

          <h1 className="font-anton max-w-2xl text-7xl leading-[0.95] text-[#3E261B]">
            PRESENTES QUE <span className="text-[#E34935]">TRANSFORMAM</span>{" "}
            MOMENTOS EM{" "}
            <span className="font-caveat text-[#E34935]">lembranças</span>
          </h1>

          <p className="text-[#796452] max-w-md">
            A VIBRA cria canecas, copos, ecobags e kits personalizados para
            presentear pessoas, empresas e celebrar datas que merecem ser
            lembradas.
          </p>

          <div className="flex gap-8">
            <Button className="bg-[#E44734] text-gray-100">
              Fazer orçamento <ArrowRight />
            </Button>
            <Button className="bg-white font-bold border border-gray-300 text-gray-600">
              Ver produtos
            </Button>
          </div>
        </div>

        {/* Imagem */}
        <div className="shrink-0">
          <img
            src="/images/hero-mockup-cKHTg1ET.jpg"
            alt="Produtos da VIBRA"
            className="size-150 rounded-[2.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

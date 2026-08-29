import { MessageCircle } from "lucide-react";
import Button from "../Button";

const Budget = () => {
  return (
    <section className="bg-[rgb(251,246,232)] py-8 px-4">
      <div
        className="max-w-7xl mx-auto h-fit md:h-125 rounded-4xl bg-cover bg-center py-18"
        style={{ backgroundImage: "url('/images/budget_background.png')" }}
      >
        <div className="flex flex-col gap-8 items-center md:gap-5">
          <h1 className="font-anton text-[60px] leading-[1.1] text-center max-w-3xl">
            <span className="block font-caveat text-4xl leading-6 text-[#E34935] mb-4">
              bora criar junto?
            </span>
            VAMOS CRIAR UM PRESENTE INESQUECÍVEL?
          </h1>

          <p className="text-text-center text-center text-[16px] leading-relaxed mb-5 font-light">
            Conte sua ideia e devolvemos uma proposta com prévia da arte em até
            24 horas.
          </p>

          <Button className="bg-[#E44734] text-gray-100 py-5 px-9 text-[18px] max-w-lg">
            <a
              href="https://wa.me/555492150680?text=Olá!%20%F0%9F%91%8B%20Vi%20o%20site%20da%20VIBRA%20e%20adorei%20o%20trabalho%20de%20vocês.%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20fazer%20um%20orçamento.%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <MessageCircle /> Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Budget;

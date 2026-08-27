import { MessageCircle } from "lucide-react";
import Button from "../Button";

const Budget = () => {
  return (
    <section className="bg-[rgb(251,246,232)] py-8">
      <div
        className="max-w-7xl mx-auto h-125 rounded-4xl bg-cover bg-center py-18"
        style={{ backgroundImage: "url('/images/budget_background.png')" }}
      >
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-anton text-[60px] leading-[1.1] text-center max-w-3xl">
            <span className="block font-caveat text-4xl leading-6 text-[#E34935] mb-4">
              bora criar junto?
            </span>
            VAMOS CRIAR UM PRESENTE INESQUECÍVEL?
          </h1>

          <p className="text-text-center text-[16px] leading-relaxed mb-5 font-light">
            Conte sua ideia e devolvemos uma proposta com prévia da arte em até
            24 horas.
          </p>

          <Button className="bg-[#E44734] text-gray-100 py-5 px-9 text-[18px] max-w-lg">
            <MessageCircle /> Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Budget;

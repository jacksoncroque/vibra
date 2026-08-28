import { Lightbulb, Palette, Truck } from "lucide-react";
import { LuMousePointerClick } from "react-icons/lu";

const data = [
  {
    id: 1,
    title: "ESCOLHA O PRODUTO",
    description: "Caneca, copo, ecobag ou kit completo",
    icon: LuMousePointerClick,
  },
  {
    id: 2,
    title: "ENVIE SUA IDEIA",
    description: "Foto, frase, logo ou só a vibe — a gente entende.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "PERSONALIZAMOS",
    description: "Nosso time cria a arte e envia a prévia pra aprovação.",
    icon: Palette,
  },
  {
    id: 4,
    title: "RECEBA EM CASA",
    description: "Embalado com carinho e entregue no Brasil inteiro.",
    icon: Truck,
  },
];

export default data;

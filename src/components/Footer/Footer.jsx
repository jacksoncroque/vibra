import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[rgb(251,246,232)] py-8 px-4">
      <div className="mx-auto max-w-7xl py-8">
        <div className="rounded-4xl bg-white h-fit md:h-78.75 p-12 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="max-w-156 flex flex-col gap-4">
              <img src="/logo/VIBRA.png" alt="VIBRA" className="w-27 h-11" />
              <p>
                Presentes personalizados feitos com afeto, cor e alma
                brasileira.
              </p>

              <img
                src="/logo/bézier.svg"
                alt="bezier"
                className="w-30 h-auto"
              />
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://wa.me/555492150680?text=Olá!%20%F0%9F%91%8B%20Vi%20o%20site%20da%20VIBRA%20e%20adorei%20o%20trabalho%20de%20vocês.%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20fazer%20um%20orçamento.%20%F0%9F%98%8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition ease-in-out duration-300 hover:text-[#E44734] hover:-translate-y-1"
                  >
                    <BsWhatsapp size={16} /> WhatsApp (54) 9215-0680
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/vibra.ofc?igsi=MTExYzk4ZnFja2pnMg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition ease-in-out duration-300 hover:text-[#E44734] hover:-translate-y-1"
                  >
                    <BsInstagram size={16} /> Instagram @vibra.ofc
                  </a>
                </li>
                <li className="flex items-center gap-2 transition ease-in-out duration-300 hover:text-[#E44734] hover:-translate-y-1">
                  <HiOutlineLocationMarker size={16} /> Caxias do Sul, RS -
                  envios para todo o Brasil
                </li>
              </ul>
            </div>
          </div>
          <div className="h-0.5 w-full bg-[#00000015] mt-10"></div>
          <p className="mt-7 text-[12px]">
            &copy; {new Date().getFullYear()} VIBRA. Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[rgb(251,246,232)] py-8">
      <div className="mx-auto max-w-7xl py-8">
        <div className="rounded-4xl bg-white h-78.75 p-12 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
          <div className="flex justify-between">
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
                <li className="flex items-center gap-2">
                  <BsWhatsapp /> WhatsApp (54) 9215-0680
                </li>
                <li className="flex items-center gap-2">
                  <BsInstagram /> Instagram @vibra.ofc
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineLocationMarker /> Caxias do Sul, RS - envios para
                  todo o Brasil
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

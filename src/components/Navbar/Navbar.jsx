import { useEffect, useState } from "react";
import Button from "../Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Produtos", href: "#products" },
    { label: "Como funciona", href: "#howItWorks" },
    { label: "Galeria", href: "#gallery" },
    { label: "Depoimentos", href: "#depoiments" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <nav className="bg-[#FBF6E8] px-4">
      <div className="flex items-center justify-between h-20 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="/">
          <img
            src="/logo/VIBRA.png"
            alt="VIBRA"
            className="w-27 h-11 cursor-pointer"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 bg-[#FEFCF4] rounded-4xl py-3 px-10 text-[14px]">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={25} />
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 z-998 bg-black/20 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />

              {/* Menu */}
              <motion.div
                className="fixed right-0 top-0 z-999 h-screen w-[85%] max-w-sm bg-[#FEFCF4] px-6 py-6 shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <img
                    src="/logo/VIBRA.png"
                    alt="VIBRA"
                    className="w-24 h-auto"
                  />

                  <button
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center rounded-full bg-[#FBF6E8] p-2 cursor-pointer"
                    aria-label="Fechar menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Links */}
                <nav className="mt-16">
                  <ul className="flex flex-col">
                    {links.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.08,
                        }}
                        className="border-b border-black/10"
                      >
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-5 text-lg font-medium"
                        >
                          {link.label}

                          <ArrowRight size={20} className="text-[#8ed447]" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-10"
                >
                  <Button className="w-full bg-[#8ed447] text-gray-900">
                    <a
                      href="https://wa.me/555492150680?text=Olá!%20%F0%9F%91%8B%20Vi%20o%20site%20da%20VIBRA%20e%20adorei%20o%20trabalho%20de%20vocês.%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20fazer%20um%20orçamento.%20%F0%9F%98%8A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fazer orçamento
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop CTA */}
        <Button className="hidden lg:block bg-[#8ed447] text-gray-900">
          <a
            href="https://wa.me/555492150680?text=Olá!%20%F0%9F%91%8B%20Vi%20o%20site%20da%20VIBRA%20e%20adorei%20o%20trabalho%20de%20vocês.%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20fazer%20um%20orçamento.%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer orçamento
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

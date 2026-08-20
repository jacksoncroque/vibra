import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="mx-30 flex items-center justify-between bg-[#FBF6E8] h-20 px-4 py-4">
      {/*imagem*/}
      <a href="/">
        <img
          src="/logo/VIBRA.png"
          alt="VIBRA"
          className="w-27 h-11 cursor-pointer"
        />
      </a>

      {/*links*/}
      <ul className="flex items-center gap-8 bg-[#FEFCF4] rounded-4xl py-3 px-10 text-[14px]">
        <li>
          <a href="#products">Produtos</a>
        </li>
        <li>
          <a href="#howItWorks">Como funciona</a>
        </li>
        <li>
          <a href="#gallery">Galeria</a>
        </li>
        <li>
          <a href="#depoiments">Depoimentos</a>
        </li>
      </ul>

      {/*botão*/}
      <Button className="bg-[#8ed447] text-gray-900 ">Fazer orçamento</Button>
    </nav>
  );
};

export default Navbar;

import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="mx-20 flex items-center justify-between bg-[#FBF6E8] h-20 px-4 py-4">
      <img
        src="/logo/VIBRA.png"
        alt="VIBRA"
        className="w-27 h-11 cursor-pointer"
      />
      <div>
        <ul className="flex items-center gap-8 bg-[#FEFCF4] rounded-4xl py-3 px-10 text-[14px]">
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Como funciona</a>
          </li>
          <li>
            <a href="">Galeria</a>
          </li>
          <li>
            <a href="">Depoimentos</a>
          </li>
        </ul>
      </div>
      <Button className="bg-[#8ed447] ">Fazer orçamento</Button>
    </nav>
  );
};

export default Navbar;

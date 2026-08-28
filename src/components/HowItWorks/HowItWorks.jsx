import data from "./data";

const HowItWorks = () => {
  return (
    <section className="bg-[rgb(251,246,232)] px-4 py-8" id="howItWorks">
      <div className="mx-auto max-w-7xl rounded-4xl bg-[#f4d27ca2] px-12 py-8">
        <h1 className="my-4 flex flex-col font-anton text-[36px] md:text-[48px]">
          <span className="font-caveat text-4xl leading-6 text-[#E34935]">
            simples assim
          </span>
          COMO FUNCIONA
        </h1>

        <ul className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-x-8">
          {/* Linha */}
          <span className="absolute top-8 hidden h-0.5 w-full bg-[#D9C99B] md:block"></span>

          {data.map((item) => (
            <li
              key={item.id}
              className="relative z-10 flex items-start gap-5 md:block"
            >
              {/* Ícone */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
                <span className="flex">
                  <item.icon size={28} color="#e6432f" />
                </span>
              </div>

              {/* Conteúdo */}
              <div>
                <h1 className="my-0 flex flex-col font-anton text-[18px] md:my-4">
                  <span className="text-[16px] leading-6 text-[#E34935]">
                    0{item.id}
                  </span>

                  {item.title}
                </h1>

                <span className="text-[14px] text-[#775d4fb6]">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;

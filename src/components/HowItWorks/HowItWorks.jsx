import data from "./data";

const HowItWorks = () => {
  return (
    <section className="bg-[rgb(251,246,232)] py-8" id="howItWorks">
      <div className="mx-auto py-8 max-w-7xl bg-[#f4d27ca2] rounded-4xl p-12">
        {/*titulo*/}
        <h1 className="font-anton flex flex-col my-4 text-[48px]">
          <span className="font-caveat text-[#E34935] text-4xl leading-6">
            simples assim
          </span>
          COMO FUNCIONA
        </h1>

        {/*passo a passo*/}

        <ul className="grid grid-cols-4 relative">
          <span className="absolute w-full h-0.5 bg-[#D9C99B] top-8"></span>
          {data.map((item) => (
            <li key={item.id} className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <span className="flex align-c">
                  {<item.icon size={28} color="#e6432f" />}
                </span>
              </div>
              <div>
                <h1 className="font-anton flex flex-col my-4 text-[20px] text-[#000000a4]">
                  <span className="text-[#E34935] leading-6 text-[16px]">
                    {0}{item.id}
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

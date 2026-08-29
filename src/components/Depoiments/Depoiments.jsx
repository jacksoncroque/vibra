import data from "./data";

const Depoiments = () => {
  return (
    <section className="bg-[rgb(251,246,232)] py-8 px-4" id="depoiments">
      <div className="mx-auto max-w-7xl py-8">
        <h1 className="font-anton my-4 flex flex-col text-[48px]">
          <span className="font-caveat text-4xl leading-6 text-[#E34935] ">
            quem já vibrou
          </span>
          DEPOIMENTOS
        </h1>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {data.map((item) => (
            <blockquote
              key={item.id}
              style={{ backgroundColor: item.color }}
              className={`w-full lg:w-102.5 h-fit flex flex-col rounded-4xl p-7 gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition duration-300 ease-in-out hover:scale-105`}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    {
                      <item.icon className="fill-[#000000a4] stroke-0 size-5" />
                    }
                  </span>
                ))}
              </div>

              <h2 className="font-semibold text-[18px]">{item.comment}</h2>

              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-4xl h-12 w-12 bg-white">
                  <span className="font-anton">{item.label}</span>
                </div>
                <footer>
                  <span className="flex flex-col text-[16px] font-bold text-[#361d11]">
                    {item.author}{" "}
                    <span className="text-[#361d1196] text-[14px] font-normal">
                      {item.event}
                    </span>
                  </span>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoiments;

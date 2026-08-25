import React from "react";
import data from "./data";

const HowItWorks = () => {
  return (
    <section className="bg-[rgb(251,246,232)] py-8">
      <div className="mx-auto py-8 max-w-7xl bg-[#f4d27ca2] rounded-4xl p-12">
        {/*titulo*/}
        <h1 className="font-anton flex flex-col my-4 text-[48px]">
          <span className="font-caveat text-[#E34935] text-4xl leading-6">
            simples assim
          </span>
          COMO FUNCIONA
        </h1>

        {/*passo a passo*/}

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div>
                <span className="bg-white p-4 rounded-full">{<item.icon />}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;

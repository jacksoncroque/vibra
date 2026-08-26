import React from "react";
import data from "./data";

const Gallery = () => {
  return (
    <section className="bg-[rgb(251,246,232)]" id="gallery">
      <div className="mx-auto max-w-7xl py-8">
        <h1 className="font-anton my-4 flex flex-col text-[48px]">
          <span className="font-caveat text-4xl leading-6 text-[#8ed447]">
            feitos por aí
          </span>
          GALERIA VIBRA
        </h1>

        {/*
          auto-rows-55 define a altura base de cada linha.
          grid-flow-dense faz o  grid tentar preencher os espaços
          vazios quando alguns itens ocupam mais de uma linha.
        */}
        <div className="grid grid-cols-3 auto-rows-55 grid-flow-dense gap-4">
          {/*
            O index controla a rotação:
            % 4 cria um ciclo de 4 rotações diferentes.
          */}
          {/* 
            Os índices 1, 4 e 7 ocupam duas linhas,
            criando imagens maiores no grid.
          */}

          {data.map((item, index) => (
            <div
              key={item.id}
              className={`
                overflow-hidden
                rounded-4xl

                shadow-[0_8px_20px_rgba(0,0,0,0.12)]

                
                index % 4 === 0 ? "-rotate-2" : ""}
                ${index % 4 === 1 ? "rotate-1" : ""}
                ${index % 4 === 2 ? "rotate-2" : ""}
                ${index % 4 === 3 ? "-rotate-1" : ""}

                
                ${[1, 4, 7].includes(index) ? "row-span-2" : ""}
              `}
            >
              <img
                src={item.img}
                alt={item.description}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

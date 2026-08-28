import ProductCard from "../ProductCard";

import data from "./data";

const Products = () => {
  return (
    <section className="bg-[rgb(251,246,232)]" id="products">
      {/*título*/}
      <div className="mx-auto py-12 max-w-7xl px-4">
        <h1 className="font-anton flex flex-col my-4 text-[48px]">
          <span className="font-caveat text-[#E34935] text-4xl leading-6">
            o que a gente cria
          </span>
          PRODUTOS COM CARA DE GENTE
        </h1>

        {/*produtos*/}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

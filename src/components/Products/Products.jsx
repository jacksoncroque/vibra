import { motion } from "motion/react";

import ProductCard from "../ProductCard";

import data from "./data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const Products = () => {
  return (
    <section className="bg-[rgb(251,246,232)]" id="products">
      {/* título */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-anton my-4 flex flex-col text-[48px]">
          <span className="font-caveat text-4xl leading-6 text-[#E34935]">
            o que a gente cria
          </span>
          PRODUTOS COM CARA DE GENTE
        </h1>

        {/* produtos */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <ProductCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

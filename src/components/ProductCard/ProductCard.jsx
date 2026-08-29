import { motion } from "motion/react";

const ProductCard = ({ item }) => {
  return (
    <motion.div
      className="max-w-157 cursor-pointer rounded-4xl bg-white p-3 shadow-lg"
      style={{ perspective: 1000, transformOrigin: "center" }}
      whileHover={{
        rotateY: -5,
        rotateZ: -0.5,
        y: -6,
        scale: 1.015,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="h-64 w-full overflow-hidden rounded-3xl">
        <motion.img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>

      <div className="block px-3 py-8">
        <h3 className="font-anton text-2xl">{item.title}</h3>
        <span className="text-[14px] text-[#796452]">{item.description}</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;

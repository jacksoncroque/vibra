const ProductCard = ({ item }) => {
  return (
    <div className="max-w-157 rounded-4xl bg-white p-3 shadow-lg" >
      <div className="h-64 w-full overflow-hidden rounded-3xl">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="block px-3 py-8">
        <h3 className="font-anton text-2xl">{item.title}</h3>
        <span className="text-[14px] text-[#796452]">{item.description}</span>
      </div>
    </div>
  );
};

export default ProductCard;

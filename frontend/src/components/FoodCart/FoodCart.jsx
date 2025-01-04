const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 shadow-md overflow-hidden">
      <figure className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {/* Price badge */}
        <p className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
          ${price}
        </p>
      </figure>

      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{recipe}</p>
        <button className="btn btn-outline border-0 border-b-4 hover:bg-orange-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;

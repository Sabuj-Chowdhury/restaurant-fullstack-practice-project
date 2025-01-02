const DishCart = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200  shadow-md overflow-hidden">
      <img
        src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"
        alt="Caesar Salad"
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">Caesar Salad</h2>
        <p className="text-sm text-gray-600 mb-4">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <button className="btn btn-outline border-0 border-b-4 hover:bg-orange-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCart;

// File: src/components/FoodCard.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState(food.sizes[1]); // Default: Regular

  const getPrice = () => {
    const index = food.sizes.indexOf(size);
    return food.basePrice + index * 30;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col">
      <img
  src={food.image}
  alt={food.name}
  className="w-full h-60 object-contain rounded-md"
/>

      
      <h3 className="text-lg font-bold text-orange-700">{food.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{food.description}</p>

      <div className="flex gap-2 mb-3">
        {food.sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`px-3 py-1 text-sm border rounded-full transition-all duration-200 shadow-sm ${
              size === s
                ? "bg-orange-500 text-white border-orange-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-auto flex justify-between items-center">
        <span className="font-bold text-orange-500 text-lg">₹{getPrice()}</span>
        <button
          onClick={() =>
            addToCart({
              ...food,
              price: getPrice(),
              name: `${food.name} (${size})`
            })
          }
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

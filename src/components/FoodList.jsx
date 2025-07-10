// File: src/components/FoodList.jsx
import { useState } from "react";
import FoodCard from "./FoodCard";
import { Search } from "lucide-react";
import pizza1 from "../assets/food/pizza1.jpg";
import pizza2 from "../assets/food/pizza2.jpg";
import pizza3 from "../assets/food/pizza3.jpg";
import burger1 from "../assets/food/burger1.jpg";
import burger2 from "../assets/food/burger2.jpg";
import burger3 from "../assets/food/burger3.jpg";
import drink1 from "../assets/food/drink1.jpg";
import drink2 from "../assets/food/drink2.jpg";
import drink3 from "../assets/food/drink3.jpg";

const foodData = [
  {
    category: "Pizza",
    items: [
      {
        name: "Veggie Paradise",
        basePrice: 189,
        image: pizza1,
        description: "Golden corn, capsicum & red paprika",
        sizes: ["Regular", "Medium", "Large"]
      },
      {
        name: "Paneer Makhani Pizza",
        basePrice: 219,
        image: pizza2,
        description: "Paneer, capsicum & makhani sauce",
        sizes: ["Regular", "Medium", "Large"]
      },
      {
        name: "Chicken Golden Delight",
        basePrice: 269,
        image: pizza3,
        description: "Double chicken & golden corn",
        sizes: ["Regular", "Medium", "Large"]
      }
    ]
  },
  {
    category: "Burger",
    items: [
      {
        name: "Jatt Grilled Chicken Burger",
        basePrice: 189,
        image: burger1,
        description: "Signature grilled chicken patty",
        sizes: ["Small", "Regular", "Large"]
      },
      {
        name: "Amritsari Aloo Tikki Burger",
        basePrice: 119,
        image: burger2,
        description: "Spiced potato tikki burger",
        sizes: ["Small", "Regular", "Large"]
      },
      {
        name: "Punjab Burger",
        basePrice: 159,
        image: burger3,
        description: "Desi cheese overloaded burger",
        sizes: ["Small", "Regular", "Large"]
      }
    ]
  },
  {
    category: "Drinks",
    items: [
  {
    name: "Coca Cola",
    basePrice: 60,
    image: drink1,
    description: "Chilled 330ml can",
    sizes: ["330ml", "500ml", "1L"]
  },
  {
    name: "Fanta",
    basePrice: 60,
    image: drink2,
    description: "No sugar fizzy refreshment",
    sizes: ["330ml", "500ml", "1L"]
  },
  {
    name: "Sprite",
    basePrice: 60,
    image: drink3,
    description: "Crisp lemon taste",
    sizes: ["330ml", "500ml", "1L"]
  }
]

  }
];

function FoodList() {
  const [search, setSearch] = useState("");

  return (
  <div id="menu" className="max-w-7xl mx-auto px-6 py-10">
    {/* Search Bar */}
    <div className="mb-6 px-2 md:px-0">
      <div className="relative w-full md:w-1/2 mx-auto">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
    </div>

    {/* Food Items */}
    {foodData.map((group) => {
      const filteredItems = group.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      if (filteredItems.length === 0) return null;

      return (
        <div key={group.category} className="mb-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b pb-2">
            {group.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((food) => (
              <FoodCard key={food.name} food={food} />
            ))}
          </div>
        </div>
      );
    })}
  </div>
);
}

export default FoodList;

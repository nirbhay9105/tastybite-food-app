import { useCart } from "../context/CartContext";
import { X } from "lucide-react"; // for close icon

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQty,
    total,
    isCartOpen,
    toggleCart
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-16 right-2 w-[95%] sm:w-96 bg-white shadow-lg rounded-lg p-4 z-50 max-h-[80vh] overflow-y-auto">
      {/* Header with close */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🛒 Your Cart</h2>
        <button onClick={toggleCart} className="text-gray-600 hover:text-red-500">
          <X className="w-6 h-6" />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between border-b pb-2 gap-2"
            >
              {/* Left Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm break-words truncate sm:text-base">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">₹{item.price}</p>
              </div>

              {/* Qty and Remove */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.name, item.qty - 1)}
                  className="bg-gray-200 px-2 rounded"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQty(item.name, item.qty + 1)}
                  className="bg-gray-200 px-2 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}

          {/* Total and Place Order */}
          <div className="text-right mt-4 text-lg font-semibold">
            Total: ₹{total}
          </div>
          <button className="w-full mt-2 px-8 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

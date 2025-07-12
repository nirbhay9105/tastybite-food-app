import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQty,
    total,
    isCartOpen,
    toggleCart,
  } = useCart();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handlePlaceOrderClick = () => {
    if (step === 1) {
      setStep(2); // Show name and mobile input
    } else {
      if (!name.trim() || !mobile.trim()) {
        alert("Please enter your name and mobile number.");
        return;
      }

      // Build order message
      const itemsList = cartItems
        .map((item) => `${item.name} x ${item.qty} = ₹${item.qty * item.price}`)
        .join("\n");
      

      const message = 
 `  *New Order from TastyBite*\n\n` +
  ` *Order Details:*\n${itemsList}\n\n` +
  ` *Total:* ₹${total}\n\n` +
  ` *Name:* ${name}\n *Mobile:* ${mobile}`;

const encoded = encodeURIComponent(message);
const link = `https://wa.me/919105468448?text=${encoded}`;

      window.open(link, "_blank");
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-16 right-4 w-96 max-h-[80vh] bg-white shadow-lg rounded-lg p-4 z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🛒 Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto pr-1">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>

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
                    className="ml-4 text-red-500"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total + Name/Mobile (step 2) + Place Order Button */}
      {cartItems.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="text-right text-lg font-semibold">
            Total: ₹{total}
          </div>

          {step === 2 && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          )}

          <button
            onClick={handlePlaceOrderClick}
            className="w-full px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
          >
            {step === 1 ? "Place Order" : "Send via WhatsApp"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

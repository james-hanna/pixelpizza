import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart } from "../api";
import { HoverEffectColor } from "../effects/HoverEffects";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0.0);
  const token = localStorage.token;

  const fetchCartItems = async () => {
    try {
      const items = await getCartItems(token);
      setCartItems(items);
      let newTotal = 0;
      items.forEach((item) => {
        console.log(item);
        const itemTotal = parseFloat(item.price) * item.quantity;
        newTotal += itemTotal;
      });
      setTotal(newTotal);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
    //eslint-disable-next-line
  }, [token]);

  const removeItem = async (productId) => {
    try {
      console.log("productId", productId);
      const response = await removeFromCart(productId, token);
      fetchCartItems();
      return response.data;
    } catch (error) {
      console.error("Couldn't remove item", error);
    }
  };

  return (
    <div className="flex flex-col mx-auto items-center mt-8 bg-greyblue border-2 border-double border-slate-800 rounded-md w-[310px] sm:w-[350px]">
      <div className="p-4">
        {HoverEffectColor(
          "hover:text-blue-700 font-pixel text-xl",
          "Cart Items"
        )}
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white px-4 py-2 w-[300px] rounded-md mb-4 border-2 border-double border-slate-800 flex justify-between items-center"
          >
            <button
              onClick={() => removeItem(item.product_id)}
              className="text-red-600 font-extrabold "
            >
              X
            </button>
            <p className="text-lg">{item.name}</p>
            <p>x{item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <div className="text-lg">Cart Empty</div>
      )}
      <div className="mb-3">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;

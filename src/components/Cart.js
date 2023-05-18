import React, { useEffect, useState } from "react";
import { getCartItems } from "../api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.token;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(token);
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [token]);

  return (
    <span className="flex m-auto flex-col bg-greyblue justify-center items-center">
      <h2>Cart Items</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </div>
        ))
      ) : (
        <div>Cart Empty</div>
      )}
    </span>
  );
};

export default Cart;

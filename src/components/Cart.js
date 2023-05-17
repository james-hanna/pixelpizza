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
  }, []);

  return (
    <div className="flex m-auto flex-col bg-greyblue justify-center items-center">
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.product_id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

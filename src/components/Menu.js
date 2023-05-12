import React, { useEffect, useState } from "react";
import { getPizzas } from "../api";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const pizzasData = await getPizzas();
        console.log(pizzasData[0].imgUrl);
        setPizzas(pizzasData);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.imgUrl} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <ul>
            {pizza.ingredients.split(", ").map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>Price: ${pizza.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;

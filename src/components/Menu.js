import React, { useEffect, useState } from "react";
import { HoverEffectColor } from "../effects/HoverEffects";
import { getPizzas } from "../api";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [ingreds, setIngreds] = useState({
    pizza: "",
    show: false,
  });

  const showIngs = (name) => {
    if (name === ingreds.pizza) {
      setIngreds((prevState) => ({
        ...prevState,
        show: !prevState.show,
      }));
    } else {
      setIngreds({
        pizza: name,
        show: true,
      });
    }
  };

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const pizzasData = await getPizzas();
        setPizzas(pizzasData);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-[20%] ">
      <div className="bg-greyblue p-[15px] rounded-md border-2 border-gray-800 border-double">
        <div className="text-6xl drop-shadow-lg">
          {HoverEffectColor(
            "hover:text-blue-700 text-gray-800 font-pixel",
            "Menu"
          )}
        </div>
      </div>
      <div className="text-lg font-semibold text-gray-800 mt-[100px]">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="flex flex-col items-center bg-greyblue p-[15px] mb-10 mx-auto xsm:w-[250px] sm:w-[340px] rounded-md border-2 border-double border-gray-800 "
            onClick={() => showIngs(pizza.name)}
          >
            <img
              src={pizza.imgUrl}
              alt={pizza.name}
              className="w-[200px] h-[200px] rounded-md border-2 border-gray-800 border-double"
            />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>

            {ingreds.pizza === pizza.name && ingreds.show === true && (
              <span
                className={` grid ${
                  pizza.ingredients.split(",").length > 1
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {pizza.ingredients.split(", ").map((ingredient) => (
                  <p
                    key={ingredient}
                    className="p-[5px] border-2 rounded-md border-gray-800 border-double bg-white text-center"
                  >
                    {ingredient}
                  </p>
                ))}
              </span>
            )}

            <span className="pt-[10px]">Price: ${pizza.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

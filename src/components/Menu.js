import React, { useEffect, useState } from "react";
import { HoverEffectColor } from "../effects/HoverEffects";
import { getPizzas, addToCart } from "../api";

const Menu = () => {
  const token = localStorage.token;
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

  const handleAddToCart = async (product_id, quantity) => {
    try {
      const response = await addToCart(product_id, quantity, token);
      console.log(response);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-[20%]">
      <div className="bg-greyblue p-[15px] rounded-md border-2 border-gray-800 border-double">
        <div className="text-6xl drop-shadow-lg">
          {HoverEffectColor(
            "hover:text-blue-700 text-gray-800 font-pixel",
            "Menu"
          )}
        </div>
      </div>
      <div className="text-lg font-semibold text-gray-800 mt-[100px] grid xsm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-20">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="flex flex-col items-center min-h-[340px] bg-greyblue p-[15px] mb-10 mx-auto xsm:w-[250px] sm:w-[340px] rounded-md border-2 border-double border-gray-800 "
          >
            {ingreds.pizza === pizza.name && ingreds.show === true ? (
              <div
                onClick={() => showIngs(pizza.name)}
                className="flex flex-col items-center"
              >
                <span className="flex flex-col items-center mb-5">
                  <h2 className="font-bold drop-shadow-md">{pizza.name}</h2>
                  <p>{pizza.description}</p>
                </span>
                <span className="w-[170px]">
                  {pizza.ingredients.split(", ").map((ingredient) => (
                    <p
                      key={ingredient}
                      className="my-[5px] h-[40px] border-2 rounded-md border-gray-800 border-double bg-white text-center"
                    >
                      {ingredient}
                    </p>
                  ))}
                </span>
              </div>
            ) : (
              <div
                onClick={() => showIngs(pizza.name)}
                className="flex flex-col items-center"
              >
                <img
                  src={pizza.imgUrl}
                  alt={pizza.name}
                  className="w-[200px] h-[200px] rounded-md border-2 border-gray-800 border-double"
                />
                <h2>{pizza.name}</h2>
                <span className="">Price: ${pizza.price}</span>
              </div>
            )}
            <button
              onClick={() => handleAddToCart(pizza.id, 1)}
              className="mt-[10px] bg-greyblue3 border-2 border-slate-800 border-double text-slate-700 py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

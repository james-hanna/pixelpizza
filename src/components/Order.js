import React, { useState } from "react";
import Cart from "./Cart";

const Order = () => {
  const [orderType, setOrderType] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleOrderType = (type) => {
    setOrderType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div>
      <div className="h-screen w-screen mt-[15%] md:mt-[8%] xl:mt-[5%]">
        <div className="flex xsm:justify-around md:justify-center md:gap-[50px]">
          <div className="h-[75px] w-[150px] border-2 bg-greyblue3 border-slate-900 border-double rounded-md flex justify-center items-center drop-shadow-lg">
            <button
              className={`border-2 border-double border-slate-600 h-[90%] w-[90%] rounded-md bg-greyblue ${
                orderType === "Pick Up" ? " font-bold" : ""
              }`}
              onClick={() => handleOrderType("Pick Up")}
            >
              Pick Up
            </button>
          </div>

          <div className="h-[75px] w-[150px] border-2 bg-greyblue3 border-slate-900 border-double rounded-md flex justify-center items-center drop-shadow-lg">
            <button
              className={`border-2 border-double border-slate-600 h-[90%] w-[90%] rounded-md bg-greyblue ${
                orderType === "Delivery" ? " font-bold" : ""
              }`}
              onClick={() => handleOrderType("Delivery")}
            >
              Delivery
            </button>
          </div>
        </div>

        {<Cart />}

        {orderType === "Pick Up" && (
          <div>
            <div className="bg-greyblue flex flex-col items-center border-2 border-double border-slate-800 rounded-md mt-[10%] w-[320px] sm:w-[350px] m-auto">
              <h2 className="text-2xl mt-4">Pick Up Details</h2>
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex justify-center flex-col"
              >
                <div>
                  <label htmlFor="name" className="mr-2">
                    Name:
                  </label>
                  <input
                    className="border border-slate-400"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="my-4 bg-greyblue3 border-2 border-slate-800 border-double text-slate-700 py-2 px-4 rounded"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}

        {orderType === "Delivery" && (
          <div className="bg-greyblue flex flex-col items-center border-2 border-double border-slate-800 rounded-md mt-[10%] w-[320px] sm:w-[350px] m-auto">
            <h2 className="text-2xl mt-4">Delivery Details</h2>
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex justify-center flex-col"
            >
              <div className="flex justify-between">
                <label htmlFor="name" className="mr-2">
                  Name:
                </label>
                <input
                  className="border border-slate-400"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="address" className="mr-2">
                  Address:
                </label>
                <input
                  className="border border-slate-400"
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="phone" className="mr-2">
                  Phone:
                </label>
                <input
                  className="border border-slate-400"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col justify-between">
                <label htmlFor="instructions" className="mr-2">
                  Delivery Instructions:
                </label>
                <textarea
                  className="border-2 border-slate-400 drop-shadow-lg"
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="my-4 bg-greyblue3 border-2 border-slate-600 border-double text-slate-700 py-2 px-4 rounded"
              >
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;

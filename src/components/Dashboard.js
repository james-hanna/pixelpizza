import React from "react";

const Dashboard = () => {
  const handleOrderClick = () => {
    // logic for handling order click
    console.log("rekt");
  };

  return (
    <div className="bg-white sm:pt-[25%] p-8 md:pt-[10%] xl:pt-[6%] 2xl:pt-[4%] max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button onClick={handleOrderClick}>Create Your Own</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Featured Specials</h2>
          <p>Check out our current specials:</p>
          <ul className="list-disc ml-6 mt-4">
            <li>$2 off any medium Pixel Pizza</li>
            <li>Free Pixel Bread with purchase of any large Pixel Pizza</li>
            <li>50% off Pixel Wings on Wednesdays</li>
          </ul>
        </div>
        <div className="bg-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">New Item</h2>
          <p>Introducing our latest creation:</p>
          <ul className="list-disc ml-6 mt-4">
            <li>The Pixel Pizza Burger</li>
            <li>
              A 1/3 pound Pixel Patty topped with Pixelroni, mushrooms, onions,
              and mozzarella cheese
            </li>
            <li>Served on a brioche bun with a side of Pixel Fries</li>
          </ul>
        </div>
        <div className="bg-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
          <p>See what our customers are saying:</p>
          <ul className="list-disc ml-6 mt-4">
            <li>"Best pizza in town!"</li>
            <li>"Fast and friendly service."</li>
            <li>"I love the Pixel Pizza Burger!"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

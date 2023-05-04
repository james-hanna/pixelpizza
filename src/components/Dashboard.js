import { HoverEffectColor } from "../effects/HoverEffects";
import pizzaPoster from "../assets/icons/Pizza-poster.png";
import PPP from "../assets/icons/PPP.png";
import PPPW from "../assets/icons/PPP_wide.png";
import PPPW2 from "../assets/icons/PPP_wide2.png";

const Dashboard = () => {
  const handleOrderClick = () => {
    // logic for handling order click
    console.log("rekt");
  };

  return (
    <div className="bg-[#997158] sm:pt-[25%] p-8 md:pt-[10%] xl:pt-[6%] 2xl:pt-[4%] m-auto min-h-[100vh]">
      <div className="flex justify-center items-center py-[20px]">
        <button
          className="text-2xl bg-greyblue rounded-lg outline-none p-2 hover:shadow-lg border-2 border-gray-800 hover:border-blue-600 "
          onClick={handleOrderClick}
        >
          <span className="font-pixel">
            {HoverEffectColor("hover:text-blue-600", "Start Your Order")}
          </span>
        </button>
      </div>
      <div className="banner overflow-hidden">
        <img src={PPPW} alt="nothing" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[35px]">
        <div className="bg-white p-6">
          <div className=" font-pixel flex flex-col justify-center items-center">
            <h2 className="text-xl">
              {HoverEffectColor("hover:text-blue-600", "Featured")}
            </h2>
            <h2 className="text-xl mb-4">
              {HoverEffectColor("hover:text-blue-600", "Specials")}
            </h2>
          </div>
          <p>Check out our current specials:</p>
          <ul className="list-disc ml-6 mt-4">
            <li>$2 off any medium Pixel Pizza</li>
            <li>Free Pixel Bread with purchase of any large Pixel Pizza</li>
            <li>50% off Pixel Wings on Wednesdays</li>
          </ul>
        </div>
        <div className="bg-white p-6">
          <div className=" font-pixel flex flex-col justify-center items-center">
            <h2 className="text-xl">
              {HoverEffectColor("hover:text-blue-600", "Newest")}
            </h2>
            <h2 className="text-xl mb-4">
              {HoverEffectColor("hover:text-blue-600", "Item")}
            </h2>
          </div>
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
        <div className="bg-white p-6">
          <div className=" font-pixel flex flex-col justify-center items-center">
            <h2 className="text-xl">
              {HoverEffectColor("hover:text-blue-600", "Customer")}
            </h2>
            <h2 className="text-xl mb-4">
              {HoverEffectColor("hover:text-blue-600", "Reviews")}
            </h2>
          </div>
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

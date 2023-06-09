import { useNavigate } from "react-router-dom";
import { HoverEffectColor } from "../effects/HoverEffects";
import PPPW from "../assets/icons/PPP_wide.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:pt-[20%] p-8 md:pt-4 xl:pt-[6%] 2xl:pt-[4%]">
      <div className="banner overflow-hidden sm:pt-[25px] sm:pb-[20px]">
        <img src={PPPW} alt="nothing" />
      </div>
      <div className="">
        <div className="flex justify-center items-center py-[20px]">
          <button
            className="relative text-2xl rounded-lg outline-none p-2 border-2 border-gray-800 hover:border-blue-800 bg-greyblue hover:bg-gradient-to-b from-greyblue to-greyblue2 transition-colors duration-300 ease-in-out"
            onClick={() => navigate("/order")}
          >
            <span className="font-pixel">
              {HoverEffectColor("hover:text-blue-700", "Start Your Order")}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[35px]">
          <div className="p-6 rounded-lg outline-none hover:shadow-lg border-2 border-gray-800 hover:border-blue-800 bg-greyblue hover:bg-gradient-to-b from-greyblue to-greyblue2 transition-colors duration-300 ease-in-out">
            <div className=" font-pixel flex flex-col justify-center items-center">
              <h2 className="text-xl">
                {HoverEffectColor("hover:text-blue-700", "Featured")}
              </h2>
              <h2 className="text-xl mb-4">
                {HoverEffectColor("hover:text-blue-700", "Specials")}
              </h2>
            </div>
            <p>Check out our current specials:</p>
            <ul className="list-disc ml-6 mt-4">
              <li>$2 off any medium Pixel Pizza</li>
              <li>Free Pixel Bread with purchase of any large Pixel Pizza</li>
              <li>50% off Pixel Wings on Wednesdays</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg outline-none hover:shadow-lg border-2 border-gray-800 hover:border-blue-800 bg-greyblue hover:bg-gradient-to-b from-greyblue to-greyblue2 transition-colors duration-300 ease-in-out">
            <div className=" font-pixel flex flex-col justify-center items-center">
              <h2 className="text-xl">
                {HoverEffectColor("hover:text-blue-700", "Newest")}
              </h2>
              <h2 className="text-xl mb-4">
                {HoverEffectColor("hover:text-blue-700", "Item")}
              </h2>
            </div>
            <p>Introducing our latest creation:</p>
            <ul className="list-disc ml-6 mt-4">
              <li>The Pixel Pizza Burger</li>
              <li>
                A 1/3 pound Pixel Patty topped with Pixelroni, mushrooms,
                onions, and mozzarella cheese
              </li>
              <li>Served on a brioche bun with a side of Pixel Fries</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg outline-none hover:shadow-lg border-2 border-gray-800 hover:border-blue-800 bg-greyblue hover:bg-gradient-to-b from-greyblue to-greyblue2 transition-colors duration-300 ease-in-out">
            <div className=" font-pixel flex flex-col justify-center items-center">
              <h2 className="text-xl">
                {HoverEffectColor("hover:text-blue-700", "Cust")}
                <span className="text-slate-700 hover:text-orange-800">o</span>
                {HoverEffectColor("hover:text-blue-700", "mer")}
              </h2>
              <h2 className="text-xl mb-4">
                {HoverEffectColor("hover:text-blue-700", "Reviews")}
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
    </div>
  );
};

export default Dashboard;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Typist from "react-typist-component";
import pizza_icon from "../assets/icons/pizza-v1.gif";
import { HoverEffectColor } from "../effects/HoverEffects";
import { AuthContext } from "../AuthContext";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-8 py-4 bg-greyblue shadow-xl border-b-2 border-gray-800 border-double">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={pizza_icon} alt="ppicon" className="w-8 h-8 mr-2" />
            <Link
              to="/"
              smooth="true"
              duration={500}
              className="xsm:text-2xl md:text-lg lg:text-xl text-gray-800 cursor-pointer"
            >
              {HoverEffectColor(
                "hover:text-blue-700 font-pixel",
                "Pixel Pizza"
              )}
              <span className="hidden lg:inline-block">
                <Typist
                  typingDelay={100}
                  loop={true}
                  backspaceDelay={25}
                  cursor={<span className="cursor">|</span>}
                >
                  <span className="font-extrabold">{`: `}</span>
                  <span className="text-orange-500 font-bold">Legendary </span>
                  <span className="font-bold">Flavor!</span>
                  <Typist.Delay ms={150} />
                  <Typist.Backspace count={17} />
                  <span className="text-indigo-500 font-bold">Epic </span>
                  <span className="font-bold">Ingredients!</span>
                  <Typist.Delay ms={150} />
                  <Typist.Backspace count={17} />
                  <span className="text-yellow-500 font-bold">Rare </span>
                  <span className="font-bold">Prices!</span>
                  <Typist.Delay ms={150} />
                  <Typist.Backspace count={12} />
                </Typist>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-4 text-lg md:text-xl font-semibold">
              <li>
                <Link
                  to="/order"
                  smooth="true"
                  duration={500}
                  className="text-gray-800 cursor-pointer"
                >
                  {HoverEffectColor(
                    "hover:text-blue-700 hover:drop-shadow-[0_5.2px_5.2px_rgba(0,0,230,0.7)]",
                    "Order Online"
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  smooth="true"
                  duration={500}
                  className="text-gray-800 cursor-pointer"
                >
                  {HoverEffectColor(
                    "hover:text-blue-700 hover:drop-shadow-[0_5.2px_5.2px_rgba(0,0,230,0.7)]",
                    "Locations"
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  smooth="true"
                  duration={500}
                  className="text-gray-800 cursor-pointer"
                >
                  {HoverEffectColor(
                    "hover:text-blue-700 hover:drop-shadow-[0_5.2px_5.2px_rgba(0,0,230,0.7)]",
                    "Menu"
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/tracker"
                  smooth="true"
                  duration={500}
                  className="text-gray-800 cursor-pointer"
                >
                  {HoverEffectColor(
                    "hover:text-blue-700 hover:drop-shadow-[0_5.2px_5.2px_rgba(0,0,230,0.7)]",
                    "Tracker"
                  )}
                </Link>
              </li>
              {user ? (
                <li>
                  <Link
                    to="/profile"
                    smooth="true"
                    duration={500}
                    className="text-gray-800 cursor-pointer"
                  >
                    {HoverEffectColor(
                      "hover:text-blue-700 hover:drop-shadow-[0_5.2px_5.2px_rgba(0,0,230,0.7)]",
                      user.username
                    )}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    smooth="true"
                    duration={500}
                    className="text-gray-800 cursor-pointer"
                  >
                    {HoverEffectColor(
                      "hover:text-blue-700 hover:drop-shadow-[0_5.2px_5.2px_rgba(0,0,230,0.7)]",
                      "Log in"
                    )}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="mobile-menu-button focus:outline-none"
              onClick={toggleNav}
            >
              <FaBars className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col text-center mt-4`}
      >
        <MobileNav
          userName={user?.username || "Log in"}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;

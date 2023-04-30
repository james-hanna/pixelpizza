import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Typist from "react-typist-component";
import pizza_icon from "../assets/icons/pizza-v1.gif";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-8 py-4 bg-[#cedcf5] shadow-xl ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src={pizza_icon} alt="ppicon" className="w-8 h-8 mr-2" />
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="xsm:text-2xl md:text-xl font-bold text-gray-800 cursor-pointer space-x-2"
            >
              {`Pixel Pizza `}
              <span className="hidden md:inline-block">
                <Typist
                  typingDelay={100}
                  loop={true}
                  backspaceDelay={25}
                  cursor={<span className="cursor">|</span>}
                >
                  <span>{`: `}</span>
                  <span className="text-orange-500">Legendary </span>Flavor!
                  <Typist.Delay ms={150} />
                  <Typist.Backspace count={17} />
                  <span className="text-indigo-500">Epic </span>
                  <span>Ingredients!</span>
                  <Typist.Delay ms={150} />
                  <Typist.Backspace count={17} />
                  <span className="text-yellow-500">Rare </span>
                  <span>Prices!</span>
                  <Typist.Delay ms={150} />
                  <Typist.Backspace count={12} />
                </Typist>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8 text-lg font-bold">
              <li>
                <Link
                  to="order"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-indigo-500 cursor-pointer"
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link
                  to="locations"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-indigo-500 cursor-pointer"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="menu"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-indigo-500 cursor-pointer"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="tracker"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-indigo-500 cursor-pointer"
                >
                  Tracker
                </Link>
              </li>
              <li>
                <Link
                  to="sign_in"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-indigo-500 cursor-pointer"
                >
                  Log in
                </Link>
              </li>
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
        <Link
          to="order"
          smooth={true}
          duration={500}
          className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
          onClick={toggleNav}
        >
          Order Online
        </Link>
        <Link
          to="locations"
          smooth={true}
          duration={500}
          className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
          onClick={toggleNav}
        >
          Locations
        </Link>
        <Link
          to="Menu"
          smooth={true}
          duration={500}
          className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
          onClick={toggleNav}
        >
          Menu
        </Link>
        <Link
          to="Tracker"
          smooth={true}
          duration={500}
          className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
          onClick={toggleNav}
        >
          Tracker
        </Link>
        <Link
          to="login"
          smooth={true}
          duration={500}
          className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
          onClick={toggleNav}
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

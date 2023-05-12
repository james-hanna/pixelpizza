import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link
        to="order"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
        onClick={toggleNav}
      >
        Order Online
      </Link>
      <Link
        to="locations"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
        onClick={toggleNav}
      >
        Locations
      </Link>
      <Link
        to="Menu"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
        onClick={toggleNav}
      >
        Menu
      </Link>
      <Link
        to="Tracker"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
        onClick={toggleNav}
      >
        Tracker
      </Link>
      <Link
        to="login"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-indigo-500 cursor-pointer"
        onClick={toggleNav}
      >
        Log In
      </Link>
    </div>
  );
};

export default MobileNav;

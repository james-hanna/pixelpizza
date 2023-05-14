import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ userName, setIsOpen, isOpen }) => {
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link
        to="order"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
        onClick={toggleNav}
      >
        Order Online
      </Link>
      <Link
        to="locations"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
        onClick={toggleNav}
      >
        Locations
      </Link>
      <Link
        to="Menu"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
        onClick={toggleNav}
      >
        Menu
      </Link>
      <Link
        to="Tracker"
        smooth="true"
        duration={500}
        className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
        onClick={toggleNav}
      >
        Tracker
      </Link>
      {userName === "Log in" ? (
        <Link
          to="/login"
          smooth="true"
          duration={500}
          className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
        >
          "Log in"
        </Link>
      ) : (
        <span>
          <Link
            to="/profile"
            smooth="true"
            duration={500}
            className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
          >
            {userName}
          </Link>
          <Link
            onClick={toggleNav}
            smooth="true"
            duration={500}
            className="block py-2 mx-auto text-xl font-medium text-gray-800 hover:text-blue-800 cursor-pointer border-b-2 border-gray-800"
          >
            Log out
          </Link>
        </span>
      )}
    </div>
  );
};

export default MobileNav;

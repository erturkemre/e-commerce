import React from "react";
import { NavLink } from "react-router-dom";
import { User2, Search, ShoppingCart, Heart, ChevronDown } from "lucide-react";
import "tailwindcss/tailwind.css";

const SideBar = () => {
  return (
    <div className="flex justify-between items-center p-4 pl-8 bg-white text-gray-500">
      <div>
        <NavLink to="/" className="text-2xl font-bold text-black">
          Bandage
        </NavLink>
      </div>
      <div className="flex space-x-4 ">
        <NavLink to="/" className="hover:text-black font-semibold">
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className="dropdown dropdown-hover hover:text-black font-semibold "
        >
          <label tabIndex={0} className="cursor-pointer">
            Shop <ChevronDown className="inline-block" />
          </label>
          {/* <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-14"
          >
            <li>
              <NavLink to="item1">Item1</NavLink>
            </li>
            <li>
              <NavLink to="item1">Item2</NavLink>
            </li>
          </ul> */}
        </NavLink>
        <NavLink to="/about" className=" hover:text-black font-semibold">
          About
        </NavLink>
        <NavLink to="/blog" className=" hover:text-black font-semibold">
          Blog
        </NavLink>
        <NavLink to="/contact" className=" hover:text-black font-semibold">
          Contact
        </NavLink>
      </div>
      <div className="flex space-x-4">
        <NavLink to="/login" className="btn m-1 text-blue-500">
          <User2 className="inline-block mr-1" /> Login/Register
        </NavLink>
        <NavLink to="" className="btn m-1 text-blue-500">
          <Search className="inline-block" />
        </NavLink>
        <NavLink to="/cart" className="btn m-1 text-blue-500">
          <ShoppingCart className="inline-block" />
        </NavLink>
        <NavLink to="/fav" className="btn m-1 text-blue-500">
          <Heart className="inline-block" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { NavLink } from "react-router-dom";
import { User2, Search, ShoppingCart, Heart, ChevronDown } from "lucide-react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { MD5 } from "crypto-js";

const SideBar = () => {
  const user = useSelector((store) => store.userReducer.user);
  const userNotFetched = useSelector(
    (store) => store.userReducer.fetchState === FETCH_STATES.notFetched
  );
  const userFetched = useSelector(
    (store) => store.userReducer.fetchState === FETCH_STATES.fetched
  );
  return (
    <div className="flex justify-between sm:items-center p-4 pl-8 bg-white text-gray-500 ">
      <div>
        <NavLink to="/" className="text-2xl font-bold text-black">
          Bandage
        </NavLink>
      </div>
      <div className="flex flex-col pt-12 sm:pt-0 sm:flex-row sm:space-x-4 ">
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
        <NavLink to="/team" className=" hover:text-black font-semibold">
          Team
        </NavLink>
        <NavLink to={"/contact"} className=" hover:text-black font-semibold">
          Contact
        </NavLink>
      </div>
      <div className="flex flex-row space-x-4 ">
        {userNotFetched && (
          <NavLink
            to="/login"
            className="hidden sm:flex text-[#252B42]  sm:btn sm:m-1 sm:text-blue-500"
          >
            <User2 className="inline-block mr-1" /> Login/Register
          </NavLink>
        )}
        {userFetched && (
          <div className="flex flex-row py-2 items-start justify-center sm:items-center gap-2">
            <img
              src={`https://www.gravatar.com/avatar/${MD5(user.email)}?s=24`}
              alt="avatar"
            />
            <div className=" hover:text-black font-semibold">{user.name}</div>
          </div>
        )}
        <NavLink to="" className="btn m-1 text-[#252B42] sm:text-blue-500">
          <Search className="inline-block" />
        </NavLink>
        <NavLink to="/cart" className="btn m-1 text-[#252B42] sm:text-blue-500">
          <ShoppingCart className="inline-block" />
        </NavLink>
        <NavLink to="/fav" className="btn m-1 text-[#252B42] sm:text-blue-500">
          <Heart className="inline-block" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

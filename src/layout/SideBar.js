import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { User2, Search, ShoppingCart, Heart, ChevronDown } from "lucide-react";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { MD5 } from "crypto-js";
import { useEffect } from "react";
import { fetchCategoriesAction } from "../store/actions/globalActions";
import CartDropdown from "../components/CartDropdown";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.user);
  const userNotFetched = useSelector((store) => store.userReducer.fetchState);

  const categories = useSelector((store) => store.globalReducer.categories);

  

  useEffect(() => {
    categories.length === 0 && dispatch(fetchCategoriesAction());
  }, []);

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
          to="/shopping"
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          <div
            tabIndex={0}
            role="button"
            className="flex flex-row items-center justify-center hover:text-black font-semibold"
          >
            Shop
            <ChevronDown />
            
          </div>
          {toggle && (
            <ul className="flex flex-row absolute z-[1] menu p-2 shadow bg-base-100 rounded-box gap-10 bg-white rounded-md">
              <div>
                {categories.map((category) => (
                  <li className="hover:text-black font-semibold ">
                    <Link
                      to={`/shopping/${
                        category.gender === "k" ? "kadin" : "erkek"
                      }/${category.title.toLowerCase()}`}
                    >
                      {`${
                        category.gender === "k" ? `Kadın ${category.title}` : ""
                      } `}
                    </Link>
                  </li>
                ))}
              </div>
              <div>
                {categories.map((category) => (
                  <li className="hover:text-black font-semibold ">
                    <Link
                      to={`/shopping/${
                        category.gender === "k" ? "kadin" : "erkek"
                      }/${category.title.toLowerCase()}`}
                    >
                      {`${
                        category.gender === "e" ? `Erkek ${category.title}` : ""
                      } `}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          )}
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
        {(userNotFetched === FETCH_STATES.notFetched ||
          userNotFetched === FETCH_STATES.fetchError) && (
          <NavLink
            to="/login"
            className="hidden sm:flex text-[#252B42]  sm:btn sm:m-1 sm:text-blue-500"
          >
            <User2 className="inline-block mr-1" /> Login/Register
          </NavLink>
        )}
        {userNotFetched === FETCH_STATES.fetched && (
          <div className="flex flex-row py-2 items-start justify-center sm:items-center gap-3">
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

        <button
          to="/cart"
          onMouseEnter={() => setToggle2(true)}
          onMouseLeave={() => setToggle2(false)}
          className="flex flex-row m-1 text-[#252B42] sm:text-blue-500"
        >
          <ShoppingCart className="inline-block" />
          <CartDropdown toggle2={toggle2} setToggle2={setToggle2}/>
        </button>
        <NavLink to="/fav" className="btn m-1 text-[#252B42] sm:text-blue-500">
          <Heart className="inline-block" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

import { ChevronRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import ProductListCard from "../components/ProductListCard";
import BrandBanner from "../components/BrandBanner";
import { useSelector } from "react-redux";


const ProductListPage = () => {
  const categories = useSelector((store) => store.globalReducer.categories);
  const topCategories = categories.sort((a, b) => b.rating - a.rating).slice(0,5);
  console.log(topCategories);

  return (
    <div>
      <div className="bg-[#FAFAFA] p-4">
        <div className=" flex flex-col items-center">
          <div className="flex flex-col items-center sm:flex-row  sm:justify-between w-[75%] p-5 px-16 ">
            <p className=" text-[##252B42] text-2xl font-bold">Shop</p>
            <div className="flex flex-row items-center ">
              <NavLink
                to="/"
                className="text-[#252B42] font-bold hover:text-blue-800"
              >
                Home
              </NavLink>
              <ChevronRight size={18} />
              <p to="/shop" className="text-[#BDBDBD]">
                shop
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:flex-wrap w-[88%] justify-center">
            {topCategories.map((topCategory, index) => (
              <div key={topCategory.id}>
                <div className="flex flex-col w-52 h-56 justify-center items-center">
                  <img
                    className="relative px-2 w-full h-full object-cover rounded-md"
                    src={topCategory.img}
                    alt="product"
                  />
                  <div className="flex flex-col absolute items-center ">
                    <p className="text-white text-2xl font-bold">
                      {topCategory.gender==='k'? "Kadın" : "Erkek"}
                    </p>
                    <p className="text-white">{topCategory.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <ProductListCard />
      </div>
      <div>
        <BrandBanner />
      </div>
    </div>
  );
};
export default ProductListPage;

import { ChevronRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import card1 from "../Assets/card-cover-1.jpg";
import card2 from "../Assets/card-cover-2.jpg";
import card3 from "../Assets/card-cover-3.jpg";
import card4 from "../Assets/card-cover-4.jpg";
import card5 from "../Assets/card-cover-5.jpg";
import ProductListCard from "../components/ProductListCard";
import BrandBanner from "../components/BrandBanner";
const products = [
  {
    id: 1,
    image: card1,
    title: "Cloths",
    description: "5 items",
  },
  {
    id: 2,
    image: card2,
    title: "Cloths",
    description: "5 items",
  },
  {
    id: 3,
    image: card3,
    title: "Cloths",
    description: "5 items",
  },
  {
    id: 4,
    image: card4,
    title: "Cloths",
    description: "5 items",
  },
  {
    id: 5,
    image: card5,
    title: "Cloths",
    description: "5 items",
  },
];

const ProductListPage = () => {
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
            {products.map((product, index) => (
              <div key={product.id}>
                <div className="flex flex-col w-52 h-56 justify-center items-center">
                  <img
                    className="relative px-2"
                    src={product.image}
                    alt="product"
                  />
                  <div className="flex flex-col absolute  ">
                    <p className="text-white text-2xl font-bold">
                      {product.title}
                    </p>
                    <p className="text-white">{product.description}</p>
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

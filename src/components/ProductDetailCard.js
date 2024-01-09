import { Carousel } from "@material-tailwind/react";
import {
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
  StarHalf,
} from "lucide-react";
import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "reactstrap";

const ProductDetailCard = () => {
  const products = useSelector((state) => state.productReducer.productList);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = (productId) => {
    const savedProduct = localStorage.getItem("productData");

    if (savedProduct) {
      try {
        const parsedProduct = JSON.parse(savedProduct);
        if (parsedProduct && parsedProduct.id === productId) {
          return parsedProduct;
        }
      } catch (error) {
        console.error("Error parsing product from localStorage:", error);
      }
    }

    return products?.find((p) => p.id === productId) || null;
  };

  useEffect(() => {
    const productId = parseInt(id);
    const myData = getProduct(productId);

    if (myData) {
      localStorage.setItem("productData", JSON.stringify(myData));
    }

    setProduct(myData);
  }, [id, products]);

  return (
    <div className="bg-[#FAFAFA] w-[100%] flex ">
      {product ? (
        <div className="flex flex-col mx-24 ">
          <div className="flex flex-row items-center my-5">
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
          <div className="flex flex-col sm:flex-row gap-28">
            <div className="w-[31.80rem] h-[34.30rem]">
              <Carousel className="flex rounded-xl h-[28.125rem]">
                <img
                  src={product?.images[0].url}
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              </Carousel>
              <div className="flex flex-row">
                <img
                  src={product?.images[0].url}
                  alt="image 1"
                  className="h-[6.25rem] w-[6.25rem] object-cover rounded-xl p-2 "
                />
              </div>
            </div>
            <div className="flex flex-col sm:w-[25rem] gap-5 py-5 ">
              <h4 className="text-[#252B42] font-normal text-xl">
                {product?.name}
              </h4>
              <div className="flex flex-row ">
                <Star className="" />
                <Star className="" />
                <Star className="" />
                <Star className="" />
                <StarHalf className="" />
              </div>

              <h3 className="text-[#252B42] font-bold text-2xl">
                {product?.price}
              </h3>
              <p className="text-[#252B42] font-bold text-sm">
                Availability: {product?.availability}
              </p>
              <p className="text-[#252B42] font-normal text-sm">
                {product?.description}
              </p>
              <div className="bg-[#BDBDBD] w-[100%] h-1 "></div>
              <div className="flex gap-4 py-16">
                <button className="bg-[#23A6F0] text-white rounded-xl px-4 py-2">
                  Select Option
                </button>
                <div className="flex items-center justify-center w-[2rem] h-[2rem] text-center rounded-full bg-white">
                  <Heart className="text-[#252B42]" />
                </div>
                <div className="flex items-center justify-center w-[2rem] h-[2rem] text-center rounded-full bg-white">
                  <ShoppingCart className="text-[#252B42]" />
                </div>
                <div className="flex items-center justify-center w-[2rem] h-[2rem] text-center rounded-full bg-white">
                  <Eye className="flex text-[#252B42] " />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
      <div></div>
    </div>
  );
};

export default ProductDetailCard;

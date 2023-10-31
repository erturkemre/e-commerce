import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coursel1 from "../Assets/coursel1.png";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: coursel1,
      caption: "VİTA Classic Product",
      description:
        "We know how large objet will act, but things on a small scale",
      price: "$16.48",
    },
    // {
    //   image: slide2,
    //   caption: "Bu ikinci resim",
    //   description:
    //     "We know how large objet will act, but things on a small scale",
    // },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const handleSlide = () => {};

  return (
    <div
      className="flex flex-row carousel-content bg-[#23856D] w-[100%] h-[38rem] "
      onClick={handleSlide}
    >
      <div className=" flex items-center">
        <div>
          <button
            className="top-2/3 left-2 transform -translate-y-1/2 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-20 h-16" />
          </button>
        </div>
        <div className="flex flex-row">
          {items.map((item, index) => (
            <div className="flex flex-row items-center ">
              <div>
                <h1 className="flex flex-wrap text-6xl font-bold text-white p-3 ">
                  {item.caption}
                </h1>
                <p className="flex flex-wrap text-white text-sm p-3">
                  {item.description}
                </p>
                <div className="flex flex-row items-center">
                  <h3 className="text-2xl font-bold text-white mx-3">
                    {item.price}
                  </h3>
                  <button className="bg-[#2DC071] text-white rounded-md py-3 px-10">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="px-32 ">
                <img src={item.image} alt="coursel1" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className="top-2/3 right-0 transform -translate-y-1/2 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-20 h-16" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;

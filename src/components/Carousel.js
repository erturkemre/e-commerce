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
  const handleSlide = () => {

  };

  return (
    <div className="carousel-content bg-[#23856D]" onClick={handleSlide}>
      
      <div className="carousel-content flex  ">
      <button
        className="top-2/3 left-2 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-20 h-16" />
      </button>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "active" : "inactive"
            } h-screen w-screen bg-cover`}
            style={{ backgroundImage: `url(${item.image})`, width: "30%" }}
          >
            <div className="flex flex-col flex-wrap items-start py-80 px-40 text-white">
              <h1 className="text-6xl font-bold">{item.caption}</h1>
              <h4 className="text-xl">{item.description}</h4>
              <div>
                <p>{item.price}</p>
                <NavLink
                to="/cart"
                className="bg-[#2DC071] text-white p-4 px-10 mt-4 rounded-md text-xl "
              >
                ADD TO CART
              </NavLink></div>
              
            </div>
          </div>
        ))}
        <button
        className="absolute top-2/3 right-2 transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-20 h-16"/>
      </button>
      </div>
      
    </div>
  );
};
export default Carousel;

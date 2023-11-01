import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../Assets/slide1.jpg";
import slide2 from "../Assets/slide2.png";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: slide1,
      caption: "NEW COLLECTION",
      description:
        "We know how large objet will act, but things on a small scale",
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
    <div className="carousel-content" onClick={handleSlide}>
      <button
        className=" absolute z-20 top-2/3 left-2 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-20 h-16" />
      </button>
      <div className="carousel-content flex w-[100%] ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "active" : "inactive"
            } relative h-screen w-screen bg-cover bg-center`}
            style={{ backgroundImage: `url(${item.image})`, width: "100%" }}
          >
            <div className="flex flex-col flex-wrap items-start py-40 sm:py-80 px-20 sm:px-40 text-white">
              <h1 className="text-6xl font-bold">{item.caption}</h1>
              <h4 className="text-xl">{item.description}</h4>
              <NavLink
                to="/shop"
                className="bg-[#2DC071] text-white p-4 px-10 mt-4 rounded-md text-xl "
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute z-20 top-2/3 left-[35rem] sm:left-[85rem] transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-20 h-16"/>
      </button>
    </div>
  );
};
export default Slider;

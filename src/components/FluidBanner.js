import React from "react";
import "tailwindcss/tailwind.css";
import asians from "../Assets/asian-woman-man-with-winter-clothes.png";

const FluidBanner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center pt-20 sm:pt-0 ">
      <div>
        <img src={asians} alt="asians" />
      </div>
      <div className="flex flex-col items-center sm:items-start mx-10">
        <h2 className="flex flex-wrap text-4xl font-bold text-[#252B42]">
          Part of the Neural Universe
        </h2>
        <p className="flex flex-wrap text-xl font-normal text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col sm:flex-row w-[100%] pb-20">
          <button className="mx-40 sm:mx-0 px-4 py-3 mt-4 text-white bg-[#23A6F0] sm:bg-[#2DC071] rounded-md">
            BUY NOW
          </button>
          <button className="mx-40 px-4 py-3 mt-4 sm:mx-5 text-[#23A6F0] sm:text-[#2DC071] bg-white rounded-md border-2">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default FluidBanner;

import React from "react";
import "tailwindcss/tailwind.css";
import asians from "../Assets/asian-woman-man-with-winter-clothes.png";

const FluidBanner = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <img src={asians} alt="asians" />
      </div>
      <div className="flex flex-col  items-start mx-10">
        <h2 className="flex flex-wrap text-4xl font-bold text-[#252B42]">
          Part of the Neural Universe
        </h2>
        <p className="flex flex-wrap text-xl font-normal text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-row w-[100%]">
          <button className="px-4 py-2 mt-4 text-white bg-[#2DC071] rounded-md">
            BUY NOW
          </button>
          <button className="px-4 py-2 mt-4 mx-5 text-[#2DC071] bg-white rounded-md border-2">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default FluidBanner;

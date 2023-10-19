import React from "react";
import banner from "../Assets/AboutBannerpng.png";

const AboutBanner = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-start justify-center ">
        <h1 className="text-[#252B42] font-bold text-6xl mt-8">ABOUT US</h1>
        <p className="text-lg text-[#252B42] mt-4">We know how large objects will act, but things on a small scale</p>
        <button className="bg-[#23A6F0] text-white px-6 py-3 mt-4 rounded-md">Get Quote Now</button>
      </div>
      <div>
        <div className="absolute">
          <div className="absolute rounded-full top-[15.4rem] left-[34.6rem] bg-[#FFE9EA] w-8 h-8"></div>
          <div className="absolute rounded-full top-32 left-[36rem] bg-[#977DF4] w-2 h-2"></div>
          <div className="absolute rounded-full top-[25.5rem] left-6 bg-[#977DF4] w-2 h-2"></div>
          <div className="absolute rounded-full top-3  bg-[#FFE9EA] w-20 h-20"></div>
          <div className="absolute rounded-full left-14 bg-[#FFE9EA] w-[30.25rem] h-[30.25rem]"></div>
        </div>
        <img className="relative top-[-3.5rem] left-8" src={banner} />
      </div>
    </div>
  );
};

export default AboutBanner;

import React from "react";
import "tailwindcss/tailwind.css";
import brand1 from "../Assets/brandAssets/brand1.png";
import brand2 from "../Assets/brandAssets/brand2.png";
import brand3 from "../Assets/brandAssets/brand3.png";
import brand4 from "../Assets/brandAssets/brand4.png";
import brand5 from "../Assets/brandAssets/brand5.png";
import brand6 from "../Assets/brandAssets/brand6.png";

const BrandBanner = () => {
  return (
    <>
      <div className="flex flex-row bg-[#FAFAFA] justify-evenly items-center p-10 px-28 h-44 ">
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand4} />
        <img src={brand5} />
        <img src={brand6} />
      </div>
      <div className="bg-white h-2"></div>
    </>
  );
};
export default BrandBanner;

import React from "react";
import video from "../Assets/aboutVideoSplash.png"

const AboutVideoCard = () => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative w-[65.625rem] h-[47.75rem]">
        <iframe
          src={video}
          title="video player"
          frameBorder="0"
          className="flex items-center justify-center rounded-[1.25rem] w-[61.85rem] h-[33.75rem]"
        ></iframe>
        <div className="absolute top-[14rem] left-[28rem]">
          <button className="absolute bg-[#23A6F0] text-white w-[92.6px] h-[92.6px] rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default AboutVideoCard;

import React from "react";


const AboutVideoCard = () => {
  return (
    <div className="flex items-center justify-center bg-white pt-[45rem] sm:pt-0">
      <div className="flex items-center w-[25.625rem] h-[19.75rem] sm:w-[65.625rem] sm:h-[47.75rem]">
        <iframe
          src={"https://www.youtube.com/embed/nZmO8B9rRik?si=ynFqPbQI1mm2CwhU"}
          title="video player"
          className="flex items-center justify-center rounded-[1.25rem] w-[25.625rem] h-[19.75rem] sm:w-[61.85rem] sm:h-[33.75rem]"
        ></iframe>
        
      </div>
    </div>
  );
};

export default AboutVideoCard;

import React from "react";
import "tailwindcss/tailwind.css";
import manCategory from "../Assets/manCategory.png";

const CategoryCard = () => {
  return (
    <div className="flex flex-col content-center justify-center bg-[#FAFAFA] ">
      <div className="flex pt-10 flex-col">
        <h2 className="text-2xl font-bold text-center">EDITOR'S PICK</h2>
        <p>Problems trying to resolve the conflict between.</p>
      </div>
      <div className="flex flex-row justify-center">
        <div>
          <div className=" bg-man-pattern relative ">
            <img src={manCategory} alt="manCategory" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
